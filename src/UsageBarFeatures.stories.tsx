import type { Meta, StoryObj } from '@storybook/react'
import UsageBar, { type UsageBarProps } from '../lib/UsageBar'

const items = [
    { name: 'UI', value: 10, color: '#E85D04' },
    { name: 'Photos', value: 30 },
    { name: 'Videos', value: 15 },
    { name: 'System Data', value: 33 },
    { name: 'Other', value: 8 }
]

const meta: Meta<typeof UsageBar> = {
    title: 'Features',
    component: UsageBar,
    args: {
        items,
        total: 100,
        showFallbackColors: true
    },
    argTypes: {
        items: { control: 'object' },
        total: { control: { type: 'number', min: 0, max: 500 } },
        darkMode: { control: 'boolean' },
        showLabels: { control: 'boolean' },
        showPercentage: { control: 'boolean' },
        compactLayout: { control: 'boolean' },
        showFallbackColors: { control: 'boolean' },
        animated: { control: 'boolean' },
        transitionDuration: { control: { type: 'number', min: 0, max: 3, step: 0.1 } },
        showTooltipOnHover: { control: 'boolean' },
        segmentGap: { control: { type: 'number', min: 0, max: 10 } },
        segmentBorderRadius: { control: { type: 'number', min: 0, max: 20 } },
        height: { control: { type: 'number', min: 4, max: 40 } },
        borderRadius: { control: { type: 'number', min: 0, max: 20 } },
        rtl: { control: 'boolean' },
        errorMessage: { control: 'text' },
        ariaLabel: { control: 'text' },
        className: { control: 'text' },
        remaining: { control: 'object' },
        onItemClick: { table: { disable: true } },
        renderTooltip: { table: { disable: true } },
        renderSegment: { table: { disable: true } }
    },
    decorators: [(Story) => <div style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}><Story /></div>]
}

export default meta
type Story = StoryObj<typeof UsageBar>

export const Animated: Story = {
    args: {
        animated: true,
        transitionDuration: 0.5
    }
}

export const HoverTooltips: Story = {
    args: {
        showTooltipOnHover: true
    }
}

export const CustomTooltip: Story = {
    args: {
        renderTooltip: (item, pct) => (
            <span>
                <strong>{item.name}</strong> &mdash; {pct}
            </span>
        )
    },
    argTypes: {
        renderTooltip: { table: { disable: true } }
    }
}

export const CustomSegment: Story = {
    args: {
        compactLayout: true,
        showLabels: false,
        renderSegment: (_item: UsageBarProps['items'][0], _pct: string, style: React.CSSProperties) => <div style={{ ...style, opacity: 0.7 }} />
    },
    argTypes: {
        renderSegment: { table: { disable: true } }
    }
}

export const SegmentGap: Story = {
    args: {
        segmentGap: 3,
        segmentBorderRadius: 4,
        compactLayout: true
    }
}

export const GradientColors: Story = {
    args: {
        items: [
            { name: 'Photos', value: 30, color: 'linear-gradient(90deg, #4facfe, #00f2fe)' },
            { name: 'Videos', value: 15, color: 'linear-gradient(90deg, #f093fb, #f5576c)' },
            { name: 'Music', value: 20, color: 'linear-gradient(90deg, #43e97b, #38f9d7)' }
        ],
        showFallbackColors: false,
        compactLayout: true
    }
}

export const CustomHeight: Story = {
    args: {
        height: 16,
        borderRadius: 8
    }
}

export const RemainingSpace: Story = {
    args: {
        compactLayout: true,
        showPercentage: true,
        total: 150,
        remaining: { name: 'Available', color: '#d4d4d4' }
    }
}

export const ClickableSegments: Story = {
    args: {},
    render: (args) => (
        <UsageBar
            {...args}
            onItemClick={(item) => alert(`Clicked: ${item.name} (${item.value})`)}
        />
    )
}

export const RightToLeft: Story = {
    args: {
        rtl: true,
        compactLayout: true,
        showPercentage: true
    }
}

export const WithAriaLabel: Story = {
    args: {
        ariaLabel: 'Storage usage: 96 of 100 GB used'
    }
}
