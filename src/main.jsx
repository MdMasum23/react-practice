import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Use_state from './components/use_state.jsx'
import Use_effect from './components/Use_effect.jsx'
import Timerapp from './components/Timerapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Use_state/>
    <Use_effect/>
    <Timerapp/>
  </StrictMode>,
)
