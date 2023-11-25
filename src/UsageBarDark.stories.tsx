import * as React from "react"
import UsageBar from "./UsageBar"

export default {
  title: "Usage Bar Dark",
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

const mainDarkModeContainerStyle = { backgroundColor: "#212121", padding: 16 }

export const darkMode = () => (
  <div style={mainDarkModeContainerStyle}>
    <UsageBar darkMode showFallbackColors items={items} total={100} />
  </div>
)

export const darkModeWithoutLabels = () => (
  <div style={mainDarkModeContainerStyle}>
    <UsageBar
      showLabels={false}
      showFallbackColors
      darkMode
      items={items}
      total={100}
    />
  </div>
)

export const darkModeWithPercentages = () => (
  <div style={mainDarkModeContainerStyle}>
    <UsageBar
      showPercentage
      showFallbackColors
      darkMode
      items={items}
      total={100}
    />
  </div>
)

export const darkModeCompact = () => (
  <div style={mainDarkModeContainerStyle}>
    <UsageBar
      showPercentage
      showFallbackColors
      compactLayout
      darkMode
      items={items}
      total={100}
    />
  </div>
)

export const darkModeCompactWithoutLabels = () => (
  <div style={mainDarkModeContainerStyle}>
    <UsageBar
      showLabels={false}
      compactLayout
      showFallbackColors
      darkMode
      items={items}
      total={100}
    />
  </div>
)

export const error = () => (
  <>
    <p>If sum of values exceeds total.</p>
    <div style={mainDarkModeContainerStyle}>
      <UsageBar items={items} total={50} />
    </div>
  </>
)
