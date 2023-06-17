import Pixel from './Pixel'

interface Props {
  width: number
  selectedColor: string
}

export default function Row(props: Props) {
  const { width, selectedColor } = props
  const pixels = []

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
  }
  return <div className="row">{pixels}</div>
}
