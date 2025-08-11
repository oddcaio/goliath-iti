import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Router">
       <Navbar />
       <Switch>
        <Route path='/' exact />
       </Switch>
    </div>
  )
}

export default App
