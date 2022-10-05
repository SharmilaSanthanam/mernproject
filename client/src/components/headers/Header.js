import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icons/menu.png'
import Logo from './icons/logo.png'
import Cart from './icons/cart.png'
import { NavLink } from 'react-router-dom'
import axiosInstance from '../../config'
import './header.css'


function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axiosInstance.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><NavLink to="/create_product">Create Product</NavLink></li>
                <li><NavLink to="/category">Categories</NavLink></li>
               
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><NavLink to="/" onClick={logoutUser}>Logout</NavLink></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <NavLink to="/">{isAdmin ? 'Admin' :  <img src={Logo} alt="Santacraft" width="20%" />}</NavLink>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><NavLink to="/">{isAdmin ? 'Products' : 'Craftshop'}</NavLink></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><NavLink to="/login">Login or Register</NavLink></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <h2 className="menu">X</h2>
                   </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <NavLink to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </NavLink>
                </div>
            }
            
        </header>
    )
}

export default Header
