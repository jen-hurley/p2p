import React from 'react'
import Row from './Row'
export default function DrawingPad(props) {
  const { width, height, selectedColor } = props

  let rows = []

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
  }
  return (
    <div id="drawing-pad">
      <div id="pixels">{rows}</div>
    </div>
  )
}
