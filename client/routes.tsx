import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import DrawPad from './components/drawpad/DrawPad'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/howitworks" element={<HowItWorks />} />
    <Route path="/draw" element={<DrawPad />} />
  </Route>
)

export const router = createBrowserRouter(routes)
