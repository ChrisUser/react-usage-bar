import * as React from "react"
import UsageBar from "./UsageBar"

export default {
  title: "Usage Bar",
  component: UsageBar,
  parameters: {},
}

const items = [
  {
    name: "UI",
    value: 10,
    color: "#E85D04",
  },
  {
    name: "Photos",
    value: 30,
  },
  {
    name: "Videos",
    value: 15,
  },
  {
    name: "System Data",
    value: 33,
  },
  {
    name: "Other",
    value: 8,
  },
]

const compactContainerStyle = { maxWidth: 500, margin: "0 auto" }
const normalContainerStyle = { margin: 24 }

export const lightMode = () => (
  <div style={normalContainerStyle}>
    <UsageBar showFallbackColors items={items} total={100} />
  </div>
)

export const withoutLabels = () => (
  <div style={normalContainerStyle}>
    <UsageBar showLabels={false} showFallbackColors items={items} total={100} />
  </div>
)

export const withPercentages = () => (
  <div style={normalContainerStyle}>
    <UsageBar showPercentage showFallbackColors items={items} total={100} />
  </div>
)

export const compactLayout = () => (
  <div style={compactContainerStyle}>
    <UsageBar
      showPercentage
      showFallbackColors
      compactLayout
      items={items}
      total={100}
    />
  </div>
)

export const compactLayoutWithoutLabels = () => (
  <div style={compactContainerStyle}>
    <UsageBar
      showLabels={false}
      showFallbackColors
      compactLayout
      items={items}
      total={100}
    />
  </div>
)

export const error = () => (
  <>
    <p>If sum of values exceeds total.</p>
    <UsageBar items={items} total={50} />
  </>
)
