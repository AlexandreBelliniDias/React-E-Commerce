import React, { Component} from 'react'
import {Consumer} from '../context/context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class Details extends Component {
    render(){
        return(
            <Consumer>
                {(data)=>{
                 const {id,company,img,info,price,title,inCart}=data.detailProduct
                 return(
                     <div className='container py-5'>
                         <div className='row'>
                            <div className='col-10 mx-auto text-center text-slanted text-blue my-2'>
                                <h1>{title}</h1>
                            </div>
                         </div>
                         <div className='row'>
                            <div className='col-10 mx-auto col-md-6 my-3'>
                               <img src={img} className='img-fluid' alt='Img product'/> 
                            </div>
                            <div className='col-10 mx-auto col-md-6 my-3'>
                                <h4 className='text-title mt-3 mb-2'>{company}</h4>
                                <h4 className='text-blue'>${price}</h4>
                                <p className='font-weight-bold mt-3 mb-0'>Info about product:</p>
                                <p>{info}</p>
                                <div>
                                    <Link to='/'>
                                        <Button>
                                            Back to Shop
                                        </Button>
                                    </Link>
                                    <Button disabled={inCart?true:false} onClick={()=>{data.addCart(id)}}>
                                        {inCart?'In Cart': 'Add to Cart'}
                                    </Button>
                                </div>
                            </div>
                         </div>
                     </div>
                 )
                }}
            </Consumer>
        )
    }
}

const Button = styled.button`
text-transform:capitalize;
font-size: 2.4rem !important;
background: transparent;
border:0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2 rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainWhite);
}
&:focus{
    outline:none;
}
`