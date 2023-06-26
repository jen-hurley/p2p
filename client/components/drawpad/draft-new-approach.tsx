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
      className="pixel"
      onClick={onClick}
      style={{ backgroundColor: color, width: '20px', height: '20px' }}
    ></button>
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

  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)
  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState('start drawing')

  const [color, setColor] = useState('#f44336')

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing')
  }

  function handleColumnSizeChange(n: number) {
    const newGrid = [] as string[][]
    for (let i = 0; i < n; i++) {
      if (rowData[i]) {
        newGrid.push(rowData[i])
      } else {
        const nCol = rowData[0].length
        // new array of nothing but lenght of a row
        const row = Array.from({ length: nCol }).fill('#fff') as string[]

        newGrid.push(row)
      }
    }

    setRowData(newGrid)
  }

  // mouse move mouse down
  // capture div of pattern for download

  function handleRowSizeChange(n: number) {
    const newGrid = rowData.map((row) => {
      if (n < row.length) {
        return row.slice(n - 1)
      } else {
        return row.concat(
          Array.from({ length: n - row.length }).fill('#fff') as string[]
        )
      }
    })

    setRowData(newGrid)
  }

  function changeColor(color: { hex: SetStateAction<string> }) {
    //paramater is from colorpicker
    setColor(color.hex)
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
      <h1>Draw your pattern</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      <form
        onSubmit={(e) => {
          e.preventDefault()

          handleRowSizeChange(panelWidth)
        }}
      >
        <input
          className="panelInput"
          type="number"
          min="1"
          max="100"
          value={panelWidth}
          onChange={(e) => {
            setPanelWidth(Number(e.target.value))
          }}
        ></input>
        <button> width</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          handleColumnSizeChange(panelHeight)
        }}
      >
        <input
          className="panelInput"
          type="number"
          min="1"
          max="100"
          value={panelHeight}
          onChange={(e) => {
            setPanelHeight(Number(e.target.value))
          }}
        ></input>
        <button> height</button>
      </form>
      <br />
      <div>
        <button onClick={initializeDrawingPanel}>{buttonText}</button>
      </div>
      <br />

      {hideOptions && (
        <>
          <div>
            <CirclePicker color={color} onChangeComplete={changeColor} />
          </div>
          <br />
          <div>
            {rowData.map((colors, row) => (
              <Row
                key={row}
                colors={colors}
                onClick={(col) => {
                  update(row, col)
                }}
              />
            ))}
          </div>
          <br />
          <button onClick={save}>Save</button>
        </>
      )}
    </div>
  )
}
