import Pixel from './Pixel'

export default function Grid() {
  return (
    <div className="draw-area">
      {Array.from({ length: 500 }, () => (
        // eslint-disable-next-line react/jsx-key
        <Pixel />
      ))}
    </div>
  )
}
