import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import FetchAPI from './pages/FetchAPI.jsx'
// import Api from './pages/Api.jsx'
// import BooksApi from './pages/BooksApi.jsx'
import UserAPI from './pages/UserAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAPI />
  </StrictMode>,
)
