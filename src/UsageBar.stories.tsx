import * as React from "react"
import UsageBar from "./UsageBar"

export default { title: "UsageBar", component: UsageBar }

const items = [
  {
    name: "UI",
    value: 10,
    color: "#000000",
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

export const basic = () => <UsageBar items={items} total={100} />
export const withPercentages = () => (
  <UsageBar showPercentage={true} items={items} total={100} />
)
export const withoutLabels = () => (
  <UsageBar removeLabels={true} items={items} total={100} />
)
export const errors = () => {
  return (
    <div>
      <span>If sum of values exceeds total.</span>
      <UsageBar items={items} total={50} />
    </div>
  )
}
