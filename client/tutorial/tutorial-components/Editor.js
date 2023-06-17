import { useState } from 'react'
// has default pallet that we change in this tutorial
import { CirclePicker } from 'react-color'

import '../css/styles.css'

import DrawingPad from './DrawingPanel'

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)

  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState('start drawing')
  const [selectedColor, setColor] = useState('#f44336')

  function initializeDrawingPanel() {
    // switch between true and false
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing')
  }

  function changeColor(color) {
    //paramater is from colorpicker
    setColor(color.hex)
  }

  return (
    <>
      <div id="editor">
        <h1> Pixel Editor </h1>
        {hideDrawingPanel && <h2> Enter Panel Dimensions</h2>}
        {hideDrawingPanel && (
          <>
            <div id="options">
              <div className="option">
                <input
                  className="panelInput"
                  type="number"
                  defaultValue={panelWidth}
                  onChange={(e) => {
                    setPanelWidth(e.target.value)
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
                    setPanelHeight(e.target.value)
                  }}
                ></input>
                <span>Height</span>
              </div>
            </div>
          </>
        )}
        <button className="button" onClick={initializeDrawingPanel}>
          {buttonText}
        </button>

        {hideOptions && (
          <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        )}

        {hideOptions && (
          <DrawingPad
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
          />
        )}
      </div>
    </>
  )
}
