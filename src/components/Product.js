import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import {productContext} from '../contexts/ProductContext';

//NB: event.target.getAttribute('data-tag')


export default class Product extends React.Component{
	static contextType = productContext;
	render(){
		const {addToBasket} = this.context;
		const {title, price, image, rating, id} = this.props;
		return(
			<div className="product">
				<div className="product__info">
					<p className="product__title">{title}</p>
					<p className="product__price">
						${price}
					</p>
					<p className="product__rating">
						{
							Array(rating).fill().map(_=> <StarIcon className="product__star"/>)
						}
					</p>
				</div>
				
				<img src={image} alt="" />
				
				<button 
					onClick={e=>addToBasket(e)} 
					data-id={id}
					data-title={title}
					data-price={price}
					data-image={image}
					data-rating={rating}
				>
					Add to Basket
				</button>
				
			</div>
		)
		
	}
}