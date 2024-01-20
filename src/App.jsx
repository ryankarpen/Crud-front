import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return(
      <div className="App">
        <ToastContainer/>
        <Navbar/>
        <Outlet/>
      </div>
    )
}

export default App
