import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './Form'
import Login from './Login'
import Biodata from './Biodata'
import Sign from './Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/signup" element={<Sign />}></Route>
            <Route path="/" element={<Login />}></Route>

            <Route path="/studentform" element={<Form />}></Route>
            <Route path="/biodata" element={< Biodata />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
