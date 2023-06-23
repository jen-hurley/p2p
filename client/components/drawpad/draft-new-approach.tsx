import './styles.css'
import { useState } from 'react'

// no local state from row or pixels
// don't have to reach into dom

function Pixel({ onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, width: '20px', height: '20px' }}
    >
      .
    </button>
  )
}

function Row({ onClick, colors }) {
  return (
    <div className="row">
      {colors.map((color, col) => (
        <Pixel
          color={color}
          onClick={() => {
            onClick(col)
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [rowData, setRowData] = useState([
    ['#bada55', '#fff', '#000'],
    ['#bada55', '#fff', '#000'],
    ['#bada55', '#fff', '#000'],
  ])

  function update(rowN, colN) {
    setRowData((rows) =>
      rows.map((row, y) =>
        row.map((cell, x) => {
          if (y === rowN && x === colN) {
            return '#f00'
          }

          return cell
        })
      )
    )
  }

  function save() {
    console.log(rowData)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {rowData.map((colors, row) => (
        <Row
          colors={colors}
          onClick={(col) => {
            update(row, col)
          }}
        />
      ))}
      <button onClick={save}>Save</button>
    </div>
  )
}
