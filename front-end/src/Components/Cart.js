import React, { useEffect, useState } from 'react'
// import "./Cart.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./style.css"
import { CartState } from '../context/ProductsContext/Contexts'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { UserState } from '../context/UsersContext/UserContexts'
import axios from 'axios'

function Cart() {
    const response=CartState()
    let cart=response.state.cart
    let responseuser=UserState()
    let user=responseuser.state.user
    console.log("user in cart",user[0]._id)
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>
          acc + curr.discount_p*curr.qty,0
    ))
    },[cart])


    const shopCart=()=>{
      let prod1=[]
      cart.map(item=>{
        let product1={
          product_id:item._id,
          name:item.name,
          qty:item.qty,
          image:item.image,
          price:item.discount_p
        }
        prod1=[...prod1,{...product1}]
      })
      // console.log("saved cart items",prod1)
      const cartItem={
        _id:user[0]._id,
        order_items:prod1,
        taxPrice:100,
        shippingPrice:0,
        totalPrice:total
      }
      console.log("user in cart",user[0]._id)
      // axios.post("/order/cart",cartItem).then(()=>{
      //   console.log("cart saved")
      // }).catch((err)=>{
      //   console.log(err)
      // })
      axios.post("/order/cart",cartItem).then(()=>{
        console.log("cart saved")
      }).catch((err)=>{
        console.log(err)
      })
    }

  return (
    <div className='home'>
      <NavBar/>
      <section className="about-header">
        
        <h2>#Let's Talk</h2>
        <p>Leave a Message,we would love to hear from you!</p>
       
    </section>

    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody id>
                {cart.map(prod=>{
                    return (<CartItem prod={prod}/>)
                })}
            </tbody>
        </table>
        <p class="total"><b>Total:{total}</b></p>
        <button class="normal" onClick={shopCart}>Save the Cart</button>
        <button class="normal"><Link to="payment">Proceed to checkout</Link></button>
    </section>

      <Footer/>
    </div>
  )
}

export default Cart
