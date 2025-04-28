import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductSelectionPage from './pages/ProductSelectionPage'
import './App.css'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<ProductSelectionPage />}/>
    </Routes>
  )
}

export default App
