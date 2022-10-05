import React, { useContext  } from 'react'
import { GlobalState } from '../../GlobalState'
import { useSearchParams } from "react-router-dom"
import './cart.css'
import axiosInstance from '../../config'

const PaymentSuccess = () => {
   const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")
 
  const state = useContext(GlobalState)
  const [cart, setCart] = state.userAPI.cart
  const [token] = state.token

  const addToCart = async (cart) =>{
    await axiosInstance.patch('/user/addcart', {cart}, {
        headers: {Authorization: token}
    })
}
const removeProduct = id =>{
  
      cart.forEach((item, index) => {
         
            setCart([]);
            addToCart();
        
      })     
  }

  return (
    <div className='success'>

      Congratulations!!!<br></br>
      Placed your Order Successfully!!!<br></br>
      <br></br>
      Payment Reference No. <b>
        {referenceNum} {removeProduct()}      
   </b>
    </div>
  )
}

export default PaymentSuccess;