import React from 'react'
import Row from './Row'

interface Props {
  width: number
  height: number
  selectedColor: string
}

export default function DrawingPanel(props: Props) {
  const { width, height, selectedColor } = props

  const rows = []

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
  }

  console.log(rows + 'rows')

  console.log(selectedColor + ' colour')
  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  )
}
