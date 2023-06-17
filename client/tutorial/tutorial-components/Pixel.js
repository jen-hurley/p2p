import { useState } from 'react'
import '../css/styles.css'

export default function Pixel(props) {
  const { selectedColor } = props

  const [pixelColor, setPixelColor] = useState('#fff')
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)

  function applyColor() {
    // when pixel is hovered over you can't change it until hovered over it again
    setPixelColor(selectedColor)
    setCanChangeColor(false)
  }

  function changeColorOnHover() {
    //set reserved value for old colour so we know which colour to swtich back to when we hover over a diffferent pixel
    //temporarily setting pixel colour to selected colour
    setOldColor(pixelColor)
    setPixelColor(selectedColor)
  }

  function resetColor() {
    // when mouse leaves pixel
    if (canChangeColor) {
      setPixelColor(oldColor)
    }

    setCanChangeColor(true)
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: { pixelColor } }}
    ></div>
  )
}