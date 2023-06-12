import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import DrawPad from './components/DrawPad'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/about" element={<About />} />
    <Route path="/howitworks" element={<HowItWorks />} />
    <Route path="/draw" element={<DrawPad />} />
  </Route>
)
