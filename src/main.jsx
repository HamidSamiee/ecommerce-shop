import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ProductProvider from './contexts/ProductContext.jsx';
import SidebarProvider from './contexts/SidebarContext.jsx';
import CartProvider from './contexts/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
      <CartProvider>
            <ProductProvider>
                  <React.StrictMode>
                        <Router>
                              <App />
                        </Router>
                  </React.StrictMode>
            </ProductProvider>
      </CartProvider>
  </SidebarProvider>
  ,
)
