import React from 'react';
import CurrencyFormat from "react-currency-format"; 
import {productContext} from '../contexts/ProductContext'; 
import './Subtotal.css';


export default class Subtotal extends React.Component{
	static contextType = productContext;
	render(){
		const {basket, getBasketTotal} = this.context;
		return (
			<div className="subtotal">
			  <CurrencyFormat
				renderText={(value) => (
				  <>
					<p>
					  {/* Part of the homework */}
					  Subtotal ({basket.length} items): <strong>{value}</strong>
					</p>
					<small className="subtotal__gift">
					  <input type="checkbox" /> This order contains a gift
					</small>
				  </>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)} // Part of the homework
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			  />

			  {basket.length >= 1 && <button>Proceed to Checkout</button>}
			</div>
		)
	}
}