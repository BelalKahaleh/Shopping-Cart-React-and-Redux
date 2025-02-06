import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex justify-between">
          <Link to="/cart" className="text-blue-500">Cart</Link>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
