import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import {productContext} from '../contexts/ProductContext';



export default class CheckoutProduct extends React.Component{
	static contextType = productContext;
	render(){
		
		const {id, title, image, rating, price} = this.props
		const {removeFromBasket, basket} = this.context;
		return (
			<div className='checkoutProduct'>
				<img src={image} alt="" className='checkoutProduct__image' />

				<div className='checkoutProduct__info'>
					<p className='checkoutProduct__title'>{title}</p>
					<p className="checkoutProduct__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="checkoutProduct__rating">
						{Array(parseInt(rating))
						.fill()
						.map((_) => (
							<p><StarIcon style={{color: "gold"}}/></p>
						))}
					</div>
					
					<button onClick={e=>removeFromBasket(e, basket)}data-id={id}>Remove from Basket</button>
					
				</div>
			</div>

		)
	}
} 