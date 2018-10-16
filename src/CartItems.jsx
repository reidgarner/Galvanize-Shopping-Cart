import React from 'react';
import CartItem from './CartItem';


class CartItems extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    {this.props.items.map(item => <CartItem item = {item}></CartItem>
                    )}
                </div>
            </div>
        )
    }
}

export default CartItems
