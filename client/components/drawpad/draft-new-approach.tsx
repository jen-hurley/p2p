// import './styles.css'
import { SetStateAction, useState } from 'react'
import { CirclePicker } from 'react-color'

// no local state from row or pixels
// don't have to reach into dom

interface Pixel {
  color: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

interface Row {
  colors: string[]
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Pixel(props: Pixel) {
  const { color, onClick } = props
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, width: '20px', height: '20px' }}
    >
      .
    </button>
  )
}

function Row(props: Row) {
  const { onClick, colors } = props

  return (
    <div className="row">
      {colors.map((color: string, column: any) => (
        <Pixel
          key={column}
          color={color}
          onClick={() => {
            onClick(column)
          }}
        />
      ))}
    </div>
  )
}

export default function DrawPadButtons() {
  const [rowData, setRowData] = useState([
    ['#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#fff'],
  ])

  const [color, setColor] = useState('#f44336')

  function changeColor(color: { hex: SetStateAction<string> }) {
    //paramater is from colorpicker
    setColor(color.hex)
    console.log(color.hex + ' hex from editor')
  }

  function update(rowN: any, colN: any) {
    setRowData((rows) =>
      rows.map((row, y) =>
        row.map((cell, x) => {
          if (y === rowN && x === colN) {
            return color
          }
          // cell is each cell. this will give back data for each cell individually

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
          key={row}
          colors={colors}
          onClick={(col) => {
            update(row, col)
          }}
        />
      ))}

      <button onClick={save}>Save</button>

      <CirclePicker color={color} onChangeComplete={changeColor} />
    </div>
  )
}
