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

const getPercentageValue = (value: number, total: number): string =>
  `${((value / total) * 100).toFixed(0)}%`

const UsageBar: React.FC<Props> = ({
  darkMode = false,
  removeLabels = false,
  showPercentage = false,
  compactLayout = false,
  total,
  items,
}) => {
  const [formattedItems, setFormattedItems] = React.useState<Item[]>([])

  const lightColors: string[] = React.useMemo(() => {
    return [
      "#F72585",
      "#B5179E",
      "#7209B7",
      "#480CA8",
      "#4361EE",
      "#009688",
      "#FB8500",
      "#1B4332",
      "#795548",
      "#DC2F02",
    ]
  }, [])
  const darkColors: string[] = React.useMemo(() => {
    return [
      "#4CC9F0",
      "#FFB703",
      "#74C69D",
      "#FEE440",
      "#00F5D4",
      "#F15BB5",
      "#BD96EE",
      "#FF85A1",
      "#4AD66D",
      "#BEBFC4",
    ]
  }, [])

  /**
   * Checks if the total value is less than the sum of all the elements values.
   */
  const uncorrectValues = React.useMemo(
    (): boolean =>
      total <
      items.reduce((tot: number, element: Item) => tot + element.value, 0),
    [items, total]
  )

  /**
   * Formats the items prop array providing a color to
   * elements without a defined one
   */
  const formatItemsArray = React.useCallback(() => {
    let selectedColors: string[] = []
    const colorsToPickFrom = darkMode ? darkColors : lightColors

    // For each element a random index is generated and then used to pick a value
    // from the colorsToPickFrom array; the selected value is removed by its original array
    // and it's pushed into the selectedColors one.
    for (let i = 0; i < items.length; i++) {
      const randIndex = Math.floor(Math.random() * colorsToPickFrom.length)
      const color = colorsToPickFrom[randIndex]
      selectedColors.push(color)
      colorsToPickFrom.splice(randIndex, 1)
    }

    // Each element from the items array is formatted correctly
    // with a defined and valid color property.
    setFormattedItems(
      items.map((item: Item, index: number) => {
        return !!item.color ? item : { ...item, color: selectedColors[index] }
      })
    )
  }, [items, darkMode])

  React.useEffect(() => {
    if (uncorrectValues) return
    formatItemsArray()
  }, [items])

  const renderUsageBar = React.useMemo(() => {
    if (compactLayout) {
      return (
        <div
          className={`c-UsageBar c-UsageBar__compact ${
            darkMode ? "u-UsageBar-dark" : "u-UsageBar-light"
          }`}
        >
          <div className="o-UsageBar__bar o-UsageBar__compact__bar">
            {formattedItems.map((element: Item, index: number) => {
              return (
                <div
                  key={index}
                  className="o-UsageBar__bar__element"
                  style={{
                    width: getPercentageValue(element.value, total),
                    backgroundColor: element.color,
                  }}
                />
              )
            })}
          </div>
          {!removeLabels && (
            <div className="o-UsageBar__bar__elements__labels__container">
              {formattedItems.map((element: Item, index: number) => {
                return (
                  <div key={index} className="o-UsageBar__bar__elements__label">
                    <div
                      className="o-UsageBar__bar__elements__label--dot"
                      style={{ backgroundColor: element.color }}
                    />
                    <span>{element.name}</span>
                    {showPercentage && (
                      <span className="o-UsageBar__bar__tooltip__percentage">
                        {getPercentageValue(element.value, total)}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        className={`c-UsageBar ${
          darkMode ? "u-UsageBar-dark" : "u-UsageBar-light"
        }`}
      >
        <div className="o-UsageBar__bar">
          {formattedItems.map((element: Item, index: number) => {
            return (
              <div
                key={index}
                className="o-UsageBar__bar__element"
                style={{
                  width: getPercentageValue(element.value, total),
                  backgroundColor: element.color,
                }}
              >
                {!removeLabels && (
                  <div className="o-UsageBar__bar__tooltip">
                    <span>{element.name}</span>
                    {showPercentage && (
                      <span className="o-UsageBar__bar__tooltip__percentage">
                        {getPercentageValue(element.value, total)}
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
  }, [formattedItems])

  if (uncorrectValues)
    return (
      <span className="u-UsageBar__error">
        ERROR: Elements values exceed the total.
      </span>
    )
  return renderUsageBar
}

export default UsageBar
