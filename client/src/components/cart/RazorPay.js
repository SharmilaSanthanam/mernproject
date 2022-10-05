import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../GlobalState'
import axiosInstance from "../../config";

const RazorPay = () => {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
      const [total, setTotal] = useState(0)


    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const checkoutHandler = async () => {

        const { data: { key } } = await axiosInstance.get("/api/getkey")

        const { data: { order } } = await axiosInstance.post("/api/checkout", {
            amount: total

        })

        //     console.log(window)   // for testing

        const options = {
            key,
            name: "SantaCraft",
            amount: order.amount,
            currency: "INR",
            order_id: order.id,
            callback_url: await axiosInstance.get("/api/paymentVerification"),

            theme: {
                "color": "rgb(69, 120, 179)"
            }



        };
        const razor = new window.Razorpay(options);
        razor.open();
        console.log(order);

    }


    return (
        <div>

            <button style={{ border: "1px solid blue", backgroundColor: "rgb(69, 120, 179)", color: "white", marginLeft: "7%" }} onClick={() => checkoutHandler()}>
                Buy Now
            </button>

        </div>

    );
}
export default RazorPay
