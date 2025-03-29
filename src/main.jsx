import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FeatureModalProvider } from './context/FeatureModalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeatureModalProvider>
      <App />
    </FeatureModalProvider>
  </StrictMode>,
)
