import React from 'react'

export default function CartTotals({data}){
    const{cartSubTotal,cartTax,cartTotal} = data
    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right'>
                        <h5 className='text-title'>
                            subtotal: ${cartSubTotal}
                        </h5>
                        <h5 className='text-title'>
                        GST+PST: ${cartTax}
                        </h5>
                        <h5 className='text-title'>
                            total: ${cartTotal}
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}