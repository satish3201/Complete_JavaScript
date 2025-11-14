import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchAPI from './pages/FetchAPI'
import BooksApi from './pages/BooksApi'
import UserAPI from './pages/UserAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchAPI /> */}
      {/* <BooksApi /> */}
      <UserAPI />
    </>
  )
}

export default App
