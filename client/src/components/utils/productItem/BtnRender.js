import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import './productItem.css'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <NavLink id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </NavLink>
                    <NavLink id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </NavLink>
                </>
                : <>
                    <NavLink id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Buy
                    </NavLink>
                    <NavLink id="btn_view" to={`/detail/${product._id}`}>
                        View
                    </NavLink>
                </>
            }
                
        </div>
    )
}

export default BtnRender




















// import React from 'react'
// // import React, {useContext} from 'react'
// import { NavNavLink } from 'react-router-dom'
// // import {GlobalState} from '../../../GlobalState'

// // function BtnRender({product, deleteProduct}) {
// //     const state = useContext(GlobalState)
// //     const [isAdmin] = state.userAPI.isAdmin
// //     const addCart = state.userAPI.addCart

// function BtnRender({ product }) {
//     return (
//         <div className="row_btn">

//             <NavNavLink id="btn_buy" to="#!" >
//                 Buy
//             </NavNavLink>
//             <NavNavLink id="btn_view" to={`/detail/${product._id}`}>
//                 View
//             </NavNavLink>
//             {/* {
//                 isAdmin ? 
//                 <>
//                     <NavLink id="btn_buy" to="#!" 
//                     onClick={() =>deleteProduct(product._id, product.images.public_id)}>
//                         Delete
//                     </NavLink>
//                     <NavLink id="btn_view" to={`/edit_product/${product._id}`}>
//                         Edit
//                     </NavLink>
//                 </>
//                 : <>
//                     <NavLink id="btn_buy" to="#!" onClick={() => addCart(product)}>
//                         Buy
//                     </NavLink>
//                     <NavLink id="btn_view" to={`/detail/${product._id}`}>
//                         View
//                     </NavLink>
//                 </>
//             } */}

//         </div>
//     )
// }

// export default BtnRender