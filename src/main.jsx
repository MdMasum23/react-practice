import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Use_state from './components/use_state.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Use_state/>
  </StrictMode>,
)
