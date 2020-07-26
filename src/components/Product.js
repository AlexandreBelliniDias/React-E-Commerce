import React, { Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Consumer} from '../context/context'
import PropTypes from 'prop-types'
 
export default class Product extends Component {
    render(){
        const {id,title,img,price,inCart} = this.props.product
        return(
            <Display className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    {/* Display product detail based on the ID using handleDetail */}
                    <Consumer>
                    {(data) =>(
                    <div className='img-container p-5' onClick={()=>data.handleDetail(id)}>
                        <Link to='/details'>
                            <img src={img} alt='Product' className='card-img-top'/> 
                        </Link>
                        <button className='cart-btn' disabled={inCart?true:false} onClick={()=>{data.addCart(id)}}>
                            {inCart?(<p className='mb-0' disabled>In Cart</p>):(<i className='fas fa-cart-plus'/>)}
                        </button>
                    </div>
                    )}
                    </Consumer>
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>{title}</p>
                        
                        <p className='text-blue font-italic mb-0'>${price}</p>
                    </div>
                    
                </div>
            </Display>
        )
    }
}

// Check if data is ok
Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

//Styled Component
const Display = styled.div`
.card{
    border-color:transparent;
    transition:all 0.4s linear;
}
.cart-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.4s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
        background: rgba(247,247,247)
    }
}
button{
    background:transparent;
    border:none;
    color:var(--mainBlue);
}
`