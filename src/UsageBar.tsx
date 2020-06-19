import * as React from "react"
import "./index.css"

interface Item {
  color?: string
  value: number
  name: string
}

interface Props {
  items: Item[]
  total: number
  darkMode?: boolean
  removeLabels?: boolean
  showPercentage?: boolean
}

const UsageBar: React.FC<Props> = ({
  darkMode = false,
  removeLabels = false,
  showPercentage = false,
  total,
  items,
}) => {
  let usedColors: string[] = []
  const colors: string[] = [
    "#f44336",
    "#03a9f4",
    "#ff9800",
    "#e91e63",
    "#9c27b0",
    "#009688",
    "#673ab7",
    "#4caf50",
    "#795548",
    "#607d8b",
  ]

  React.useEffect(() => {
    if (darkMode)
      if (document.documentElement.hasAttribute("theme"))
        document.documentElement.removeAttribute("theme")
      else document.documentElement.setAttribute("theme", "dark")
    else document.documentElement.removeAttribute("theme")
  }, [darkMode])

  const setColor = () => {
    const filteredColors = colors.filter(
      (color) =>
        usedColors.find((usedColor) => color === usedColor) === undefined
    )
    const randIndex = Math.floor(Math.random() * filteredColors.length)
    const color = filteredColors[randIndex]
    usedColors.push(color)
    return color
  }

  const getPercentageValue = (value: number) => {
    return ((value / total) * 100).toFixed(0)
  }

  const uncorrectValues = () => {
    return (
      total <
      items.reduce((tot: number, element: Item) => tot + element.value, 0)
    )
  }

  if (uncorrectValues())
    return (
      <span style={{ color: "red" }}>
        Error: Elements values exceed the total.
      </span>
    )

  return (
    <div className="UsageBar">
      <div className="UsageBar__bar">
        {items.map((element: Item) => {
          return (
            <div
              className="UsageBar__bar__element"
              style={{
                width: `${getPercentageValue(element.value)}%`,
                backgroundColor: element.color || setColor(),
              }}
            >
              {removeLabels ? (
                ""
              ) : (
                <div className="UsageBar__bar__element--tooltip">
                  {element.name +
                    " " +
                    (showPercentage
                      ? getPercentageValue(element.value) + "%"
                      : "")}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UsageBar
