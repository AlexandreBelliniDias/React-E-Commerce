import React from 'react'

export default function CartColumns(){
    return(
        <div className='container-fluid text-center d-lg-block mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Products</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Name of Product</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Price</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Quantity</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Remove</p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p>Total</p>
                </div>
            </div>
        </div>
    )
}