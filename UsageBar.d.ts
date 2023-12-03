import * as React from 'react';
interface Item {
    color?: string;
    className?: string;
    dotClassName?: string;
    value: number;
    name: string;
}
interface Props {
    items: Item[];
    total: number;
    darkMode?: boolean;
    showLabels?: boolean;
    showPercentage?: boolean;
    compactLayout?: boolean;
    showFallbackColors?: boolean;
    errorMessage?: string;
    usageBarContainerClassName?: string;
    usageBarClassName?: string;
    tooltipClassName?: string;
    errorMessageClassName?: string;
}
declare const UsageBar: React.FC<Props>;
export default UsageBar;
