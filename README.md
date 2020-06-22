# React Usage Bar Graphic Component

![React Usage Bar](example.png)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

Install via npm or yarn

```sh
npm install react-usage-bar --save
yarn add react-usage-bar
```

Alternatively just download `UsageBar.tsx` and `styles.css` from the `src` folder and include them in your project in your chosen way.

Keep in mind that the source code of the project needs [Typescript](https://www.typescriptlang.org/) to work.

## Usage

The usage bar needs to receive an array of items. In order to display all the values correctly every item should follow this interface:

### Item type

| Attribute | Type   | Required |
| --------- | ------ | -------- |
| value     | number | Yes      |
| name      | string | Yes      |
| color     | string | No       |

The `value` represents the quantity of space occupied by the sector with a certain `name`. The `color` property could be used to specify the background color of that portion in the bar.

The `total` value is also required.

### Example

```javascript
import * from 'react'
import UsageBar from 'react-usage-bar'
import "react-usage-bar/build/index.css"

const App = () => {

    const a = [
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

    return <UsageBar items={a} total={100} />
})

export default App
```

## Props (Options)

### **showPercentage** | _boolean_ | default: `false`

When true shows the percentage value of all the elements.

### **removeLabels** | _boolean_ | default: `false`

When true hides all the tooltips or lables of the items.

### **darkMode** | _boolean_ | default: `false`

Enables the component to work in dark-mode.

## CSS Styles

You should import the style directly from the package directory, like this:

```javascript
import "react-usage-bar/build/index.css"
```

The main css classes are the following:

### `.UsageBar`

The main div of the component.

### `.UsageBar__bar`

The actual bar of the component.

### `.UsageBar__bar__element`

The single item represented in the bar.

### `.UsageBar__bar__element--tooltip`

The tooltip of the item in which are written all the textual info.

- `::after` | Is used to make the triangular shape on the bottom (or top) of the tooltips.

## Docs

You can run the documentation of the component using [Storybook](https://storybook.js.org/):

```
$ yarn storybook
```

## Issues

Please create an issue for any bug or feature requests.

## Licence

React Usage Bar is [MIT licensed](https://github.com/ChrisUser/react-usage-bar/blob/master/LICENSE)
