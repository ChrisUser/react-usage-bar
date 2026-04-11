import type { Meta, StoryObj } from '@storybook/react'
import UsageBar from '../lib/UsageBar'

const items = [
    { name: 'UI', value: 10, color: '#E85D04' },
    { name: 'Photos', value: 30 },
    { name: 'Videos', value: 15 },
    { name: 'System Data', value: 33 },
    { name: 'Other', value: 8 }
]

const meta: Meta<typeof UsageBar> = {
    title: 'Usage Bar Dark',
    component: UsageBar,
    args: {
        items,
        total: 100,
        showFallbackColors: true,
        darkMode: true
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
    decorators: [(Story) => <div style={{ backgroundColor: '#212121', padding: 48 }}><Story /></div>]
}

export default meta
type Story = StoryObj<typeof UsageBar>

export const DarkMode: Story = {}

export const DarkModeWithoutLabels: Story = {
    args: { showLabels: false }
}

export const DarkModeWithPercentages: Story = {
    args: { showPercentage: true }
}

export const DarkModeCompact: Story = {
    args: { showPercentage: true, compactLayout: true },
    decorators: [(Story) => <div style={{ backgroundColor: '#212121', padding: 48, maxWidth: 500, margin: '0 auto' }}><Story /></div>]
}

export const DarkModeCompactWithoutLabels: Story = {
    args: { showLabels: false, compactLayout: true },
    decorators: [(Story) => <div style={{ backgroundColor: '#212121', padding: 48, maxWidth: 500, margin: '0 auto' }}><Story /></div>]
}

export const Error: Story = {
    args: { darkMode: false, total: 50 },
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: '#212121', padding: 48 }}>
                <p style={{ color: '#ccc' }}>If sum of values exceeds total.</p>
                <Story />
            </div>
        )
    ]
}
