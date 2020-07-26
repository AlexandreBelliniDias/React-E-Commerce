import React, { Component} from 'react'
import Product from './Product'
import {Consumer} from '../context/context'

export default class ProductList extends Component {
    render(){
        return(
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <div className='row'>
                        <Consumer>
                        {data=>{
                            return data.products.map(product =>{
                                return <Product key={product.id} product={product} />
                            })
                        }}
                        </Consumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}