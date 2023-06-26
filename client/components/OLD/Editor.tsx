import { SetStateAction, useState } from 'react'
// has default pallet that we change in this tutorial
import { CirclePicker } from 'react-color'

import DrawingPanel from './DrawingPanel'

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)

  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState('start drawing')
  const [selectedColor, setColor] = useState('#f44336')

  function initializeDrawingPanel() {
    // switching between true and false
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing')
  }

  function changeColor(color: { hex: SetStateAction<string> }) {
    //paramater is from colorpicker
    setColor(color.hex)
    console.log(color.hex + ' hex from editor')
  }

  return (
    <>
      <div id="editor">
        <h1> Pixel Editor </h1>
        {hideDrawingPanel && <h2> Enter Panel Dimensions</h2>}

        <div id="options">
          <div className="option">
            <input
              className="panelInput"
              type="number"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(Number(e.target.value))
              }}
            ></input>
            <span>Width</span>
          </div>
        </div>
        <div id="options">
          <div className="option">
            <input
              className="panelInput"
              type="number"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(Number(e.target.value))
              }}
            ></input>
            <span>Height</span>
          </div>
        </div>
        <br />

        <button className="button" onClick={initializeDrawingPanel}>
          {buttonText}
        </button>
        <br />
        {hideOptions && (
          <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        )}
        <br />
        {hideOptions && (
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        )}
      </div>
    </>
  )
}
