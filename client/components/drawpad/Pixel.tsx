import { useState } from 'react'

interface Props {
  selectedColor: string
}

export default function Pixel(props: Props) {
  const { selectedColor } = props

  //handling state

  // pixelColor is background colour of pixel (colouring the pixel)
  // oldColor is for when mouse hovers over it - nice ux
  // canChangeColor helper while switching colour on hover

  const [pixelColor, setPixelColor] = useState('#FFFFFF')
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)

  // const pixelData = document.getElementsByClassName('pixel')
  // const computedPixelColour = window.getComputedStyle(pixelData).backgroundColor
  // console.log(computedPixelColour)

  function applyColor() {
    setPixelColor(selectedColor)
    // when pixel is hovered over you can't change it until hovered over it again
    setCanChangeColor(false)
  }

  function changeColorOnHover() {
    //set reserved value for old colour so we know which colour to swtich back to when we hover over a diffferent pixel

    setOldColor(pixelColor)
    //temporarily setting pixel colour to selected colour
    setPixelColor(selectedColor)
  }

  function resetColor() {
    // when mouse leaves pixel - checking if we can change the colour back (not set it to new colour)
    if (canChangeColor) {
      setPixelColor(oldColor)
    }

    setCanChangeColor(true)
  }

  return (
    <div
      id="pixel"
      className="pixel"
      onClick={applyColor}
      onDragEnter={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  )
}
