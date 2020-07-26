import React from 'react'
import CartItem from './CartItem'

export default function CartList({data}){
    const {cart} = data

    return(
        <div className='container-fluid'>
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} data={data}/>
            })}
        </div>
    )
}