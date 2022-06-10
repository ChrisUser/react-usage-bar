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

const lightColors: string[] = [
  "#F72585", // Flickr Pink
  "#B5179E", // Byzantine (Purple)
  "#7C0FC4", // French Violet
  "#4900BD", // Medium Blue
  "#3053F1", // Blue RYB
  "#009688", // Pine Green
  "#DF9541", // Carrot Orange
  "#008049", // Sea Green
  "#80452E", // Bole (Light brown)
  "#D32A00", // Rosso Corsa (Red)
]
const darkColors: string[] = [
  "#4BBCDF", // Cyan Process
  "#E8BB4A", // Maximum Yellow Red
  "#9A32DF", // Purple X 11
  "#E76AA2", // China Pink
  "#4361EE", // Ultramarine Blue
  "#439990", // Viridian Green
  "#B583F1", // Lavender Floral
  "#EC8C1D", // Carrot Orange
  "#47CE69", // Emerald
  "#989BAC", // Manatee (Blue/Gray)
]

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

  /**
   * Checks if the total value is equal or greater than the sum of all the elements values.
   */
  const itemsValuesAreCorrect = React.useMemo(
    (): boolean =>
      total >=
      items.reduce((tot: number, element: Item) => tot + element.value, 0),
    [items, total]
  )

  /**
   * Formats the items prop array providing a color to
   * elements without a defined one.
   */
  const formatItemsArray = React.useCallback(() => {
    const selectedColors: string[] = []
    const colorsToPickFrom = darkMode ? [...darkColors] : [...lightColors]

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
        return item.color ? item : { ...item, color: selectedColors[index] }
      })
    )
  }, [items, darkMode])

  React.useEffect(() => {
    if (itemsValuesAreCorrect) {
      formatItemsArray()
    }
  }, [itemsValuesAreCorrect, formatItemsArray])

  if (!itemsValuesAreCorrect)
    return (
      <span className="u-UsageBar__error">
        ERROR: Elements values exceed the total.
      </span>
    )

  if (formattedItems.length === 0) return null

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
}

export default UsageBar
