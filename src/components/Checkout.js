import React from 'react';
import {productContext} from '../contexts/ProductContext';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

export default class Checkout extends React.Component{
	static contextType = productContext;
	render(){
		const {basket, displayEmail, user} = this.context;
		//console.log(getBasketTotal(basket))
		return (
			<div className="checkout">
			  <div className="checkout__left">
				<img
				  className="checkout__ad"
				  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				  alt=""
				/>

				<div>
				  <h3>Hello, {user ? displayEmail : "Guest"}</h3>
				  <h2 className="checkout__title">{basket.length ? "Your shopping Basket" : "You have no items to checkout"}</h2>

				  {basket.map(item => (
					<CheckoutProduct
					  id={item.productId}
					  title={item.productTitle}
					  image={item.productImage}
					  price={item.productPrice}
					  rating={item.productRating}
					/>
				  ))}

				</div>
			  </div>

			  <div className="checkout__right">
				{basket.length >=1 && <Subtotal />}
			  </div>
			</div>
		)
	}
}