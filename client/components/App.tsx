import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Welcome to Pixel 2 Pattern!</h1>
      {/* <DrawPadButtons /> */}
      <Outlet />
    </div>
  )
}

export default App
