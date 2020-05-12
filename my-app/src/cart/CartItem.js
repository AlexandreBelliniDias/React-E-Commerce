import React from 'react'

export default function CartItem({item,data}){
    const {id,title,img,price,total,count} = item
    const {add,subtract,removeItem} = data
    return(
        <div className='row my-2 text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} style={{width:'5rem',height:'5rem'}} className='img-fluid' alt='product'/>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                {title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                ${price}
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <div>
                        <span className='btn btn-black mx-1' onClick={()=>subtract(id)}>-</span>
                        <samp className='btn btn-black mx-1'>{count}</samp>
                        <span className='btn btn-black mx-1' onClick={()=>add(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=>removeItem(id)}>
                    <i className='fa fa-trash'></i>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                ${total}
            </div>
        </div>
    )
}