import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchAPI from './pages/FetchAPI'
import BooksApi from './pages/BooksApi'
import UserAPI from './pages/UserAPI'
import newapi from './pages/Newapi/.jsx'
import apiiis from './pages/apiiis'
// import Newapi from './pages/Newapi'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      {/* <FetchAPI /> */}
      {/* <BooksApi /> */}
      <UserAPI />
      {/* <Newapi /> */}

    </>
  )
}

export default App
