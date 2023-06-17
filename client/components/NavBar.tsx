import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/howitworks'}>How it works</Link>
      <Link to={'/draw'}>Draw!</Link>
    </>
  )
}
