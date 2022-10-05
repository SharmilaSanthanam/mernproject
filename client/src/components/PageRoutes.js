import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/notFound/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import PaymentSuccess from "./cart/PaymentSuccess";

function Pages() {
    
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/detail/:id" element={<DetailProduct />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/category" element={<Categories />} />
            <Route path="/create_product" element={<CreateProduct />} />
            <Route path="/edit_product/:id" element={<CreateProduct />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Pages
