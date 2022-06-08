import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { getProducts } from './services/productApi'
import Header from './components/Header'

function App() {
  getProducts().then((res) => console.log(res))
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<ProductDetails />} />
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
