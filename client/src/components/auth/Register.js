import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import axiosInstance from '../../config'
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const regsuccess = () =>  toast.success("Registered Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
   

    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axiosInstance.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)
            // alert("REGISTRATION SUCCESSFULLY")
            
             window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <>
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit"  onClick={regsuccess}>Register</button>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </form>
        </div>
          <ToastContainer />
          </>
    )
}

export default Register