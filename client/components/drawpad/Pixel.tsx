import React, { useState } from 'react'

// const getRandomColor = () =>
//   `#${Math.floor(Math.random() * 0x1000000)
//     .toString(16)
//     .padStart(6, '0')}`

export default function Pixel() {
  const [colour, setColour] = useState('#FFFFFF')

  // function handleClick(event: React.MouseEventHandler<HTMLDivElement>) {
  //   setColour(getRandomColor)
  // }

  function handleMouseEnter(event: React.MouseEventHandler<HTMLDivElement>) {
    setColour('green')
  }

  function handleDoubleClick() {
    setColour('white')
  }

  function handleDragEnter() {
    setColour('yellow')
  }

  return (
    <div
      onDragEnter={handleDragEnter}
      // onDoubleClick={handleDoubleClick}
      // onMouseEnter={handleMouseEnter}
      // onClick={handleClick}
      style={{
        fontFamily: 'Times New Roman',
        height: '50px',
        width: '50px',
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
