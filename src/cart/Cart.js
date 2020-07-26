import React, { Component } from 'react'
import CartColumns from './CartColumns.js'
import EmptyCart from './EmptyCart'
import {Consumer} from '../context/context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render(){
        return(
            <section>
                <Consumer>
                    {data =>{
                        const {cart} = data
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList data={data}/>
                                    <CartTotals data={data}/>
                                </React.Fragment>
                            )
                        }
                        else {
                            return(
                            <EmptyCart />
                            )
                        }
                    }}
                </Consumer>
            </section>
        )
    }
}