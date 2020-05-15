import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


export default class Navbar extends Component {
    render(){
        return(
            <Nav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                {/* <img src={logo} alt='store' className='navbar-brand'/> */}
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Best Sellers
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Deals
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            About
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <MyCartButton>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus'/>
                        </span>
                        My Cart
                    </MyCartButton>
                </Link>
            </Nav>
        )
    }
}

// Styled Components
const Nav = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:2.1rem !important;
}
.nav-link:hover{
    color: var(--lightBlue) !important;
}
`
const MyCartButton = styled.button`
text-transform:capitalize;
font-size: 2.4rem !important;
background: transparent;
border:0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2 rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out !important;
&:hover{
    background:var(--lightBlue);
    color:var(--mainWhite);
}
&:focus{
    outline:none;
}
`
