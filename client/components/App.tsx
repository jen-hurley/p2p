import { Outlet } from 'react-router-dom'
import DrawPadButtons from './drawpad/draft-new-approach'

function App() {
  return (
    <div>
      <h1>Welcome to Pixel 2 Pattern!</h1>
      <DrawPadButtons />
      {/* <Outlet /> */}
    </div>
  )
}

export default App
