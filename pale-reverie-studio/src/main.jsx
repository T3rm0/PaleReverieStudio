import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import Header from './Header'
import './index.css'
import "./App.css"
import App from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='site-container'>
        <div>
          <Header />
        </div>
        <App />
        <div className='footer'>

        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
