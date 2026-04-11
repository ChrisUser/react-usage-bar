import { useMemo, useCallback, Fragment, type FC, type ReactNode, type CSSProperties } from 'react'
import './index.css'

export interface Item {
    color?: string
    className?: string
    dotClassName?: string
    value: number
    name: string
}

export interface UsageBarProps {
    items: Item[]
    total: number
    darkMode?: boolean
    showLabels?: boolean
    showPercentage?: boolean
    compactLayout?: boolean
    showFallbackColors?: boolean
    errorMessage?: string
    className?: string
    usageBarContainerClassName?: string
    usageBarClassName?: string
    tooltipClassName?: string
    errorMessageClassName?: string
    ariaLabel?: string
    animated?: boolean
    transitionDuration?: number
    showTooltipOnHover?: boolean
    renderTooltip?: (item: Item, percentage: string) => ReactNode
    renderSegment?: (item: Item, percentage: string, defaultStyle: CSSProperties) => ReactNode
    segmentGap?: number
    segmentBorderRadius?: number
    height?: number | string
    borderRadius?: number | string
    remaining?: { name: string; color?: string }
    onItemClick?: (item: Item, index: number) => void
    rtl?: boolean
}

const lightColors: string[] = [
    '#F72585', // Flickr Pink
    '#B5179E', // Byzantine (Purple)
    '#7C0FC4', // French Violet
    '#4900BD', // Medium Blue
    '#3053F1', // Blue RYB
    '#009688', // Pine Green
    '#DF9541', // Carrot Orange
    '#008049', // Sea Green
    '#80452E', // Bole (Light brown)
    '#D32A00' // Rosso Corsa (Red)
]
const darkColors: string[] = [
    '#4BBCDF', // Cyan Process
    '#E8BB4A', // Maximum Yellow Red
    '#9A32DF', // Purple X 11
    '#E76AA2', // China Pink
    '#4361EE', // Ultramarine Blue
    '#439990', // Viridian Green
    '#B583F1', // Lavender Floral
    '#EC8C1D', // Carrot Orange
    '#47CE69', // Emerald
    '#989BAC' // Manatee (Blue/Gray)
]

const getPercentageValue = (value: number, total: number): string => {
    if (total <= 0) return '0%'
    return `${((value / total) * 100).toFixed(0)}%`
}

const isSafeColor = (value: string): boolean => !/url\s*\(|expression\s*\(|javascript:|@import/i.test(value)

const isGradient = (value: string): boolean => /^(linear|radial|conic)-gradient\(/i.test(value.trim())

const appendCustomClass = (customClass?: string): string => {
    if (customClass) {
        return customClass[0] === ' ' ? customClass : ` ${customClass}`
    }
    return ''
}

const getColorStyle = (color: string): CSSProperties => {
    if (isGradient(color)) return { background: color }
    return { backgroundColor: color }
}

const UsageBar: FC<UsageBarProps> = ({
    darkMode = false,
    showLabels = true,
    showPercentage = false,
    compactLayout = false,
    showFallbackColors = false,
    total,
    items,
    errorMessage = 'Error: Total elements values exceed 100%.',
    className,
    usageBarContainerClassName,
    usageBarClassName,
    tooltipClassName,
    errorMessageClassName,
    ariaLabel,
    animated = false,
    transitionDuration = 0.4,
    showTooltipOnHover = false,
    renderTooltip,
    renderSegment,
    segmentGap,
    segmentBorderRadius,
    height,
    borderRadius,
    remaining,
    onItemClick,
    rtl = false
}) => {
    const itemsValuesAreCorrect = useMemo((): boolean => total >= items.reduce((tot: number, el: Item) => tot + el.value, 0), [items, total])

    const fallbackColors = useMemo(() => (darkMode ? [...darkColors] : [...lightColors]), [darkMode])

    const getElementColor = useCallback(
        (element: Item, index: number): string | null => {
            if (element.color) return isSafeColor(element.color) ? element.color : null
            if (remaining && index >= items.length) return null
            return showFallbackColors ? fallbackColors[index % fallbackColors.length] : null
        },
        [showFallbackColors, fallbackColors, remaining, items.length]
    )

    const remainingItem: Item | null = useMemo(() => {
        if (!remaining) return null
        const sum = items.reduce((tot, el) => tot + el.value, 0)
        const value = Math.max(0, total - sum)
        if (value <= 0) return null
        return { name: remaining.name, value, color: remaining.color }
    }, [remaining, items, total])

    const allItems = useMemo(() => (remainingItem ? [...items, remainingItem] : items), [items, remainingItem])

    const hasGap = segmentGap != null && segmentGap > 0

    const getSegmentStyle = (element: Item, index: number): CSSProperties => {
        const color = getElementColor(element, index)
        const style: CSSProperties = { width: getPercentageValue(element.value, total) }

        if (color) Object.assign(style, getColorStyle(color))

        if (animated) style.transition = `width ${transitionDuration}s ease`

        if (hasGap) {
            const r =
                segmentBorderRadius != null
                    ? `${segmentBorderRadius}px`
                    : borderRadius != null
                      ? typeof borderRadius === 'number'
                          ? `${borderRadius}px`
                          : borderRadius
                      : '4pt'
            style.borderRadius = r
            style.borderLeft = 'none'
            style.borderRight = 'none'
        } else if (segmentBorderRadius != null) {
            style.borderRadius = `${segmentBorderRadius}px`
        } else if (borderRadius != null) {
            const r = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius
            if (allItems.length === 1) style.borderRadius = r
            else if (index === 0) style.borderRadius = `${r} 0 0 ${r}`
            else if (index === allItems.length - 1) style.borderRadius = `0 ${r} ${r} 0`
        }

        if (onItemClick && index < items.length) style.cursor = 'pointer'

        return style
    }

    if (!itemsValuesAreCorrect) {
        return <span className={`u-UsageBar__error${appendCustomClass(errorMessageClassName)}`}>{errorMessage}</span>
    }

    if (items.length === 0 && !remainingItem) return null

    const containerClasses = `c-UsageBar ${darkMode ? 'u-UsageBar-dark' : 'u-UsageBar-light'}${appendCustomClass(className)}${appendCustomClass(usageBarContainerClassName)}`
    const barClasses = `o-UsageBar__bar${compactLayout ? ' o-UsageBar__compact__bar' : ''}${showTooltipOnHover ? ' o-UsageBar__bar--hover-tooltips' : ''}${appendCustomClass(usageBarClassName)}`

    const barStyle: CSSProperties = {
        ...(height != null ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
        ...(borderRadius != null ? { borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius } : {}),
        ...(hasGap ? { gap: `${segmentGap}px` } : {})
    }

    const renderDefaultTooltipContent = (element: Item, _pct: string) => (
        <>
            <span>{element.name}</span>
            {showPercentage && <UsageBarPercentageLabel element={element} total={total} />}
        </>
    )

    if (compactLayout) {
        return (
            <div className={containerClasses} role="figure" aria-label={ariaLabel || 'Usage bar'} dir={rtl ? 'rtl' : undefined}>
                <div className={barClasses} style={barStyle}>
                    {allItems.map((element: Item, index: number) => {
                        const pct = getPercentageValue(element.value, total)
                        const segStyle = getSegmentStyle(element, index)

                        if (renderSegment) return <Fragment key={index}>{renderSegment(element, pct, segStyle)}</Fragment>

                        return (
                            <UsageBarElement
                                key={index}
                                element={element}
                                style={segStyle}
                                onClick={onItemClick && index < items.length ? () => onItemClick(element, index) : undefined}
                                role="meter"
                                aria-valuenow={element.value}
                                aria-valuemin={0}
                                aria-valuemax={total}
                                aria-label={`${element.name}: ${pct}`}
                            />
                        )
                    })}
                </div>
                {showLabels && (
                    <div className="o-UsageBar__bar__elements__labels__container">
                        {allItems.map((element: Item, index: number) => {
                            const color = getElementColor(element, index)
                            const pct = getPercentageValue(element.value, total)
                            return (
                                <div key={index} className="o-UsageBar__bar__elements__label">
                                    <div
                                        className={`o-UsageBar__bar__elements__label--dot${appendCustomClass(element.dotClassName)}`}
                                        style={color ? getColorStyle(color) : {}}
                                    />
                                    {renderTooltip ? renderTooltip(element, pct) : renderDefaultTooltipContent(element, pct)}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={containerClasses} role="figure" aria-label={ariaLabel || 'Usage bar'} dir={rtl ? 'rtl' : undefined}>
            <div className={barClasses} style={barStyle}>
                {allItems.map((element: Item, index: number) => {
                    const pct = getPercentageValue(element.value, total)
                    const segStyle = getSegmentStyle(element, index)

                    if (renderSegment) return <Fragment key={index}>{renderSegment(element, pct, segStyle)}</Fragment>

                    return (
                        <UsageBarElement
                            key={index}
                            element={element}
                            style={segStyle}
                            onClick={onItemClick && index < items.length ? () => onItemClick(element, index) : undefined}
                            role="meter"
                            aria-valuenow={element.value}
                            aria-valuemin={0}
                            aria-valuemax={total}
                            aria-label={`${element.name}: ${pct}`}
                        >
                            {showLabels && (
                                <div className={`o-UsageBar__bar__tooltip${appendCustomClass(tooltipClassName)}`}>
                                    {renderTooltip ? renderTooltip(element, pct) : renderDefaultTooltipContent(element, pct)}
                                </div>
                            )}
                        </UsageBarElement>
                    )
                })}
            </div>
        </div>
    )
}

const UsageBarElement: FC<{
    element: Item
    style?: CSSProperties
    children?: ReactNode
    onClick?: () => void
    role?: string
    'aria-valuenow'?: number
    'aria-valuemin'?: number
    'aria-valuemax'?: number
    'aria-label'?: string
}> = ({ element, style, children, onClick, ...ariaProps }) => {
    return (
        <div className={`o-UsageBar__bar__element${appendCustomClass(element.className)}`} style={style} onClick={onClick} {...ariaProps}>
            {children}
        </div>
    )
}

const UsageBarPercentageLabel: FC<{ element: Item; total: number }> = ({ element, total }) => {
    return <span className="o-UsageBar__bar__tooltip__percentage">{getPercentageValue(element.value, total)}</span>
}

export default UsageBar
