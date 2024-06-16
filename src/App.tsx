import React from 'react';
import './App.css';
import { ProductProvider } from './Context/ProductContext';
import { ProductForm } from './Components/ProductForm';
import { ProductTable } from './Components/ProductTable';

function App() {
  return (
    <ProductProvider>
    <div className="App">
              <ProductForm />
              <ProductTable />

    </div>
    </ProductProvider>
  );
}

export default App;
