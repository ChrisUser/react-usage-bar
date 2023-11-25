import * as React from "react"
import "./index.css"

interface Item {
  color?: string
  className?: string
  dotClassName?: string
  value: number
  name: string
}

interface Props {
  items: Item[]
  total: number
  darkMode?: boolean
  showLabels?: boolean
  showPercentage?: boolean
  compactLayout?: boolean
  showFallbackColors?: boolean
  errorMessage?: string

  usageBarContainerClassName?: string
  usageBarClassName?: string
  tooltipClassName?: string
  errorMessageClassName?: string
}

const lightColors: string[] = [
  "#F72585", // Flickr Pink
  "#B5179E", // Byzantine (Purple)
  "#7C0FC4", // French Violet
  "#4900BD", // Medium Blue
  "#3053F1", // Blue RYB
  "#009688", // Pine Green
  "#DF9541", // Carrot Orange
  "#008049", // Sea Green
  "#80452E", // Bole (Light brown)
  "#D32A00", // Rosso Corsa (Red)
]
const darkColors: string[] = [
  "#4BBCDF", // Cyan Process
  "#E8BB4A", // Maximum Yellow Red
  "#9A32DF", // Purple X 11
  "#E76AA2", // China Pink
  "#4361EE", // Ultramarine Blue
  "#439990", // Viridian Green
  "#B583F1", // Lavender Floral
  "#EC8C1D", // Carrot Orange
  "#47CE69", // Emerald
  "#989BAC", // Manatee (Blue/Gray)
]

const getPercentageValue = (value: number, total: number): string =>
  `${((value / total) * 100).toFixed(0)}%`

const shuffleArray = (a: string[]) => {
  let j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

const appendCustomClass = (customClass?: string) => {
  if (customClass) {
    return customClass[0] === " " ? customClass : ` ${customClass}`
  }
  return ""
}

const UsageBar: React.FC<Props> = ({
  darkMode = false,
  showLabels = true,
  showPercentage = false,
  compactLayout = false,
  showFallbackColors = false,
  total,
  items,
  errorMessage = "Error: Total elements values exceed 100%.",
  usageBarContainerClassName,
  usageBarClassName,
  tooltipClassName,
  errorMessageClassName,
}) => {
  /**
   * Checks if the total value is equal or greater than the sum of all the elements values.
   */
  const itemsValuesAreCorrect = React.useMemo(
    (): boolean =>
      total >=
      items.reduce((tot: number, element: Item) => tot + element.value, 0),
    [items, total]
  )

  /**
   * Returns an array of colors based on the value of `darkMode`.
   * The colors are either from the `darkColors` array or the `lightColors` array.
   * The chosen array is shuffled before being returned.
   */
  const fallbackColors = React.useMemo(() => {
    const colorsToPickFrom = darkMode ? [...darkColors] : [...lightColors]
    shuffleArray(colorsToPickFrom)
    return colorsToPickFrom
  }, [])

  /**
   * Returns the color of an element based on certain conditions.
   *
   * @param element - The item for which the color needs to be determined.
   * @param index - The index of the item in the list.
   * @returns The color of the element, either from the `color` property or a fallback
   * color from the `fallbackColors` array. If the `element` does not have a `color`
   * property and `showFallbackColors` is false, null is returned.
   */
  const getElementColor = React.useCallback(
    (element: Item, index: number) => {
      if (element.color) return element.color
      return showFallbackColors
        ? fallbackColors[index % fallbackColors.length]
        : null
    },
    [showFallbackColors, fallbackColors]
  )

  if (!itemsValuesAreCorrect)
    return (
      <span
        className={`u-UsageBar__error${appendCustomClass(
          errorMessageClassName
        )}`}
      >
        {errorMessage}
      </span>
    )

  if (items.length === 0) return null

  if (compactLayout) {
    return (
      <div
        className={`c-UsageBar c-UsageBar__compact ${
          darkMode ? "u-UsageBar-dark" : "u-UsageBar-light"
        }${appendCustomClass(usageBarContainerClassName)}`}
      >
        <div
          className={`o-UsageBar__bar o-UsageBar__compact__bar${appendCustomClass(
            usageBarClassName
          )}`}
        >
          {items.map((element: Item, index: number) => (
            <UsageBarElement
              element={element}
              color={getElementColor(element, index)}
              total={total}
              key={index}
            />
          ))}
        </div>
        {showLabels && (
          <div className="o-UsageBar__bar__elements__labels__container">
            {items.map((element: Item, index: number) => {
              const color = getElementColor(element, index)
              return (
                <div key={index} className="o-UsageBar__bar__elements__label">
                  <div
                    className={`o-UsageBar__bar__elements__label--dot${appendCustomClass(
                      element.dotClassName
                    )}`}
                    style={color ? { backgroundColor: color } : {}}
                  />
                  <span>{element.name}</span>
                  {showPercentage && (
                    <UsageBarPercentageLabel element={element} total={total} />
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={`c-UsageBar ${
        darkMode ? "u-UsageBar-dark" : "u-UsageBar-light"
      }${appendCustomClass(usageBarContainerClassName)}`}
    >
      <div className={`o-UsageBar__bar${appendCustomClass(usageBarClassName)}`}>
        {items.map((element: Item, index: number) => (
          <UsageBarElement
            element={element}
            color={getElementColor(element, index)}
            total={total}
            key={index}
          >
            {showLabels && (
              <div
                className={`o-UsageBar__bar__tooltip${appendCustomClass(
                  tooltipClassName
                )}`}
              >
                <span>{element.name}</span>
                {showPercentage && (
                  <UsageBarPercentageLabel element={element} total={total} />
                )}
              </div>
            )}
          </UsageBarElement>
        ))}
      </div>
    </div>
  )
}

const UsageBarElement: React.FC<{
  element: Item
  color: string | null
  total: number
  children?: React.ReactNode
}> = ({ element, color, total, children }) => {
  return (
    <div
      className={`o-UsageBar__bar__element${appendCustomClass(
        element.className
      )}`}
      style={{
        width: getPercentageValue(element.value, total),
        ...(color ? { backgroundColor: color } : null),
      }}
    >
      {children}
    </div>
  )
}

const UsageBarPercentageLabel: React.FC<{ element: Item; total: number }> = ({
  element,
  total,
}) => {
  return (
    <span className="o-UsageBar__bar__tooltip__percentage">
      {getPercentageValue(element.value, total)}
    </span>
  )
}

export default UsageBar
