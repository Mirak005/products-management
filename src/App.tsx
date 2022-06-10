import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import CreateEdit from './pages/AddEditPage';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/products/create' element={<CreateEdit />} />
          <Route path='/products/:productId/edit' element={<CreateEdit />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
