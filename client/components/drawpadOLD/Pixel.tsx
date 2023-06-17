import React, { useState } from 'react'

// const getRandomColor = () =>
//   `#${Math.floor(Math.random() * 0x1000000)
//     .toString(16)
//     .padStart(6, '0')}`

export default function Pixel() {
  const [colour, setColour] = useState('#FFFFFF')

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    setColour('#000000')
  }

  // function handleMouseEnter(event: React.MouseEventHandler<HTMLDivElement>) {

  //   //green
  //   setColour('#00FF00')
  // }

  // function handleDoubleClick() {
  //   setColour('white')
  // }

  // function handleDragEnter() {
  //   setColour('yellow')
  // }

  return (
    <div
      className="pixel"
      onClick={handleClick}
      style={{
        height: '10px',
        width: '10px',
        backgroundColor: colour,
      }}
    ></div>
  )
}

// function handleClick {
//   const newColourArray = colourArray.map((pixel) => {
//     if(pixel.index === props.index) {
//       return {... pixel, colour: blue}
//     } else {
//       return pixel
//     }
//     setColorArray(newColourArray)
//   })
// }
