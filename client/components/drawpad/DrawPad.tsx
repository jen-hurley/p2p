import { useState, useEffect } from 'react'

import Pixel from './Pixel'
// import ColourPicker from './ColourPicker'

export default function DrawPad() {
  return (
    <>
      <h1> draw pad</h1>
      <div className="gridLayout">
        {Array.from({ length: 50 }, () => (
          // eslint-disable-next-line react/jsx-key
          <Pixel />
        ))}
        {/* <ColourPicker /> */}
      </div>
    </>
  )
}

/// change < Pixel /> to be <Grid /> with pixels mapped inside?

// {Array.from({length: {grid-size} }, () => (Pixel />))}

// in state, array of colours set colour and colour of pixel in array of pixel

// const[colourArray, setColourArray] = useState([])

// send to db for translation process
// eg --> stringify this info
// colourArray = [
//   {index: 0, color: red}
//   {index: 1, color: blue}

// ]

// index = pixel
