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
    title: 'Usage Bar',
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
    decorators: [(Story) => <div style={{ margin: 24 }}><Story /></div>]
}

export default meta
type Story = StoryObj<typeof UsageBar>

export const LightMode: Story = {}

export const WithoutLabels: Story = {
    args: { showLabels: false }
}

export const WithPercentages: Story = {
    args: { showPercentage: true }
}

export const CompactLayout: Story = {
    args: { showPercentage: true, compactLayout: true },
    decorators: [(Story) => <div style={{ maxWidth: 500, margin: '0 auto' }}><Story /></div>]
}

export const CompactLayoutWithoutLabels: Story = {
    args: { showLabels: false, compactLayout: true },
    decorators: [(Story) => <div style={{ maxWidth: 500, margin: '0 auto' }}><Story /></div>]
}

export const Error: Story = {
    args: { total: 50 },
    decorators: [(Story) => <div style={{ margin: 24 }}><p>If sum of values exceeds total.</p><Story /></div>]
}
