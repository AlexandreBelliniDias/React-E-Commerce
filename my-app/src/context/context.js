import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data'

const Context = React.createContext()

class Provider extends Component{
    state={
        products:[],
        cart:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        detailProduct:detailProduct
    }
    // Set new info without change original data
    componentDidMount(){this.setProducts()}
    setProducts = () =>{
        let temporaryProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item}
            temporaryProducts = [...temporaryProducts,singleItem]
        })
        this.setState(()=>{
            return {products:temporaryProducts}
        })
    }

    // Find using ID
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id===id)
        return product
    }
    // Use ID to set details state with the product
    handleDetail = (id) =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return{detailProduct:product}
        })
    }


    addCart = (id) =>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price
        this.setState(()=>{return {products:tempProducts, cart:[...this.state.cart,product]}},()=>{this.addTotals()})
    }

    // In cart functions
    add = id =>{
        let tempCart = [...this.state.cart] // descontruct
        const selectedProduct = tempCart.find(item=>item.id === id) //find selected product
        const index = tempCart.indexOf(selectedProduct) //find index of the selected product
        const product = tempCart[index]
        // Set quantity and total
        product.count = product.count + 1
        product.total = product.count * product.price
        //Send to state
        this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
    }
    subtract = id =>{
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item=>item.id === id) 
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1
        if(product.count === 0){ //if the product count reach 0 then just remove the item
            this.removeItem(id)
        } else{
            product.total = product.count * product.price
            this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
        }

    }
    removeItem = id =>{
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id) //filter to remove the item that have this ID
        const index = tempProducts.indexOf(this.getItem(id)) // to find the product index
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false // reset proprieties from this item 
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState(()=>{  //Send to state

            return{
            cart:[...tempCart],
            products:[...tempProducts]
        }
        }, ()=>{
            this.addTotals() //run totals again
        })
    
    }

    // Run as callback to addCart
    addTotals = () =>{
        let subTotal = 0
        this.state.cart.map(item =>(subTotal += item.total)) // map and add each item price
        const tempTax = subTotal * 0.12 // calc tax
        const tax = parseFloat(tempTax.toFixed(2)) // reduce the number size
        const total = subTotal + tax
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
    
    render(){
        return(
            <Context.Provider value= {{
                ...this.state, 
                handleDetail:this.handleDetail,
                addCart:this.addCart,
                add:this.add,
                subtract:this.subtract,
                removeItem:this.removeItem
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer

export {Provider,Consumer}