import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductSelectionPage from './pages/ProductSelectionPage'
import './App.css'
import ProductDetailsPage from './Pages/ProductDetailsPage'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<ProductSelectionPage />}/>
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
    </Routes>
  )
}

export default App
