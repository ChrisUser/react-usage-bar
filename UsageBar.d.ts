import { FC, ReactNode, CSSProperties } from '../node_modules/react';
export interface Item {
    color?: string;
    className?: string;
    dotClassName?: string;
    value: number;
    name: string;
}
export interface UsageBarProps {
    items: Item[];
    total: number;
    darkMode?: boolean;
    showLabels?: boolean;
    showPercentage?: boolean;
    compactLayout?: boolean;
    showFallbackColors?: boolean;
    errorMessage?: string;
    className?: string;
    usageBarContainerClassName?: string;
    usageBarClassName?: string;
    tooltipClassName?: string;
    errorMessageClassName?: string;
    ariaLabel?: string;
    animated?: boolean;
    transitionDuration?: number;
    showTooltipOnHover?: boolean;
    renderTooltip?: (item: Item, percentage: string) => ReactNode;
    renderSegment?: (item: Item, percentage: string, defaultStyle: CSSProperties) => ReactNode;
    segmentGap?: number;
    segmentBorderRadius?: number;
    height?: number | string;
    borderRadius?: number | string;
    remaining?: {
        name: string;
        color?: string;
    };
    onItemClick?: (item: Item, index: number) => void;
    rtl?: boolean;
}
declare const UsageBar: FC<UsageBarProps>;
export default UsageBar;
