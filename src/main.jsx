import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './layout/Layout.jsx'
import Nav from './Components/Navbar/Navbar'

createRoot(document.getElementById('root')).render(
    <Layout>
      <Nav /> 
      <App />
    </Layout>
)
