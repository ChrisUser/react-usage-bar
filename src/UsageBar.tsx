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
  compactLayout?: boolean
}

const UsageBar: React.FC<Props> = ({
  darkMode = false,
  removeLabels = false,
  showPercentage = false,
  compactLayout = false,
  total,
  items,
}) => {
  const [usedColors, setUsedColors] = React.useState<string[]>([])
  const [formattedItems, setFormattedItems] = React.useState<Item[]>([])

  const lightColors: string[] = [
    "#F72585",
    "#B5179E",
    "#7209B7",
    "#480CA8",
    "#4361EE",
    "#009688",
    "#FB8500",
    "#1B4332",
    "#795548",
    "#DC2F02"
  ]
  const darkColors: string[] = [
    "#4CC9F0",
    "#FFB703",
    "#74C69D",
    "#FEE440",
    "#00F5D4",
    "#F15BB5",
    "#BD96EE",
    "#FF85A1",
    "#4AD66D",
    "#BEBFC4"
  ]

  const uncorrectValues = React.useMemo(() => total < items.reduce((tot: number, element: Item) => tot + element.value, 0), [items, total])

  const getPercentageValue = React.useCallback((value: number) => ((value / total) * 100).toFixed(0), [total])

  React.useEffect(() => {
    if(!uncorrectValues) {
      setColors()
    }
  }, [items])

  React.useEffect(() => {
    if(!uncorrectValues) {
      setFormattedItems(items.map((item: Item, index: number) => {
        if(item.color) return item
        else return {...item, color: usedColors[index]}
      }))
    }
  }, [items, usedColors])

  const setColors = React.useCallback(() => {
    let selectedColors: string[] = []
    const colorsToPickFrom = darkMode ? darkColors : lightColors
    for(let i = 0; i < items.length; i++) {
      const randIndex = Math.floor(Math.random() * items.length)
      const color = colorsToPickFrom[randIndex]
      selectedColors.push(color)
      colorsToPickFrom.splice(randIndex, 1)
    }
    setUsedColors(selectedColors)
  }, [items, darkMode])

  const renderUsageBar = React.useMemo(() => {
    if (compactLayout) {
      return (
        <div id="Usage--Bar--Element" className={`UsageBar Compact__UsageBar ${darkMode ? 'UsageBar__dark' : 'UsageBar__light'}`}>
          <div className="UsageBar__bar UsageBar__bar__compact__bar">
            {formattedItems.map((element: Item, index: number) => {
              return (
                <div
                  key={index}
                  className="UsageBar__bar__element"
                  style={{
                    width: `${getPercentageValue(element.value)}%`,
                    backgroundColor: element.color,
                  }}
                />
              )}
            )}
          </div>
          {!removeLabels && (
            <div className="UsageBar__bar__elements__labels__container">
              {formattedItems.map((element: Item, index: number) => {
                return (
                  <div key={index} className="UsageBar__bar__elements__label">
                    <div className="UsageBar__bar__elements__label--dot" style={{backgroundColor: element.color}} />
                    <span>{element.name}</span>
                    {showPercentage && (
                      <span className="UsageBar__bar__element--tooltip--element__percentage">
                        {getPercentageValue(element.value) + "%"}
                      </span>
                    )}
                  </div>
                )}
              )}
            </div>
          )}
        </div>
      )
    }
  
    return (
      <div id="Usage--Bar--Element" className={`UsageBar ${darkMode ? 'UsageBar__dark' : 'UsageBar__light'}`}>
        <div className="UsageBar__bar">
          {formattedItems.map((element: Item, index: number) => {
            return (
              <div
                key={index}
                className="UsageBar__bar__element"
                style={{
                  width: `${getPercentageValue(element.value)}%`,
                  backgroundColor: element.color,
                }}
              >
                {!removeLabels && (
                  <div className="UsageBar__bar__element--tooltip">
                    <span>{element.name}</span>
                    {showPercentage && (
                      <span className="UsageBar__bar__element--tooltip--element__percentage">
                        {getPercentageValue(element.value) + "%"}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }, [formattedItems, showPercentage, removeLabels, compactLayout])

  if (uncorrectValues)
    return (
      <span className="UsageBar__error">
        ERROR: Elements values exceed the total.
      </span>
    )
  return renderUsageBar
}

export default UsageBar
