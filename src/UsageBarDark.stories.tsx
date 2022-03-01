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

export const darkMode = () => (
  <div style={{ backgroundColor: "#212121" }}>
    <UsageBar darkMode items={items} total={100} />
  </div>
)

export const darkModeWithoutLabels = () => (
  <div style={{ backgroundColor: "#212121" }}>
    <UsageBar removeLabels darkMode items={items} total={100} />
  </div>
)

export const darkModeWithPercentages = () => (
  <div style={{ backgroundColor: "#212121" }}>
    <UsageBar showPercentage darkMode items={items} total={100} />
  </div>
)

export const darkModeCompact = () => (
  <div style={{ backgroundColor: "#212121" }}>
    <UsageBar showPercentage compactLayout darkMode items={items} total={100} />
  </div>
)

export const darkModeCompactWithoutLabels = () => (
  <div style={{ backgroundColor: "#212121" }}>
    <UsageBar removeLabels compactLayout darkMode items={items} total={100} />
  </div>
)

export const error = () => (
  <>
    <p>If sum of values exceeds total.</p>
    <div style={{ backgroundColor: "#212121" }}>
      <UsageBar items={items} total={50} />
    </div>
  </>
)
