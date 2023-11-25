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

export const lightMode = () => <UsageBar items={items} total={100} />

export const withoutLabels = () => (
  <UsageBar showLabels={false} showFallbackColors items={items} total={100} />
)

export const withPercentages = () => (
  <UsageBar showPercentage showFallbackColors items={items} total={100} />
)

export const compactLayout = () => (
  <UsageBar showPercentage compactLayout items={items} total={100} />
)

export const compactLayoutWithoutLabels = () => (
  <UsageBar showLabels={false} compactLayout items={items} total={100} />
)

export const error = () => (
  <>
    <p>If sum of values exceeds total.</p>
    <UsageBar items={items} total={50} />
  </>
)
