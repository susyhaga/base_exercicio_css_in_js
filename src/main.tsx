import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // Remova a extensão .tsx
import './global.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
