import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header/Header.jsx'
import Layout from './layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
)
