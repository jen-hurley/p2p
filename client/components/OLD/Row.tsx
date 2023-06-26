import Pixel from './Pixel'

interface Props {
  width: number
  selectedColor: string
}

export default function Row(props: Props) {
  const { width, selectedColor } = props

  const pixels = []

  //push pixel component + colour into pixels array array for how ever many pixels in a row (width)

  // console.log({ pixels })

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
  }
  console.log(JSON.stringify(pixels[0].props) + ' first row of pixel props')
  // console is 16x {"selectedColor":"#e91e63"} first row of pixel props. selected colour = the colour selected in colour palette

  return <div className="row">{pixels}</div>
}
