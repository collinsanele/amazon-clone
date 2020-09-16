import React from 'react';
import './ProductList.css';
import Product from './Product';
import {productContext} from '../contexts/ProductContext';



export default class ProductList extends React.Component{
	static contextType = productContext;
	render(){
		const {products} = this.context;
		const productsTwoColumnsList = products.filter(item=>item.productRowType==="two")
		const productsThreeColumnsList = products.filter(product=>product.productRowType==="three")
		const productsOneColumnsList = products.filter(product=>product.productRowType==="one")
		
		
		return (
			<React.Fragment>
				<div className="productlist">
					{productsTwoColumnsList.map(product=> (
						<Product 
							id={product.productId}
							key={product.productId}
							title={product.productTitle}
							price={product.productPrice}
							rating={product.productRating}
							image={product.productImage}
					
						/>
					))}
				</div>
				
				<div className="productlist">
					{productsThreeColumnsList.map(product=> (
						<Product id={product.productId}
						title={product.productTitle}
						price={product.productPrice}
						rating={product.productRating}
						image={product.productImage}
						/>
					))}
				</div>
				
				<div className="productlist">
					{productsOneColumnsList.map(product=> (
						<Product id={product.productId}
						title={product.productTitle}
						price={product.productPrice}
						rating={product.productRating}
						image={product.productImage}
						/>
					))}
				</div>
			</React.Fragment>
			
			
		)
	}
}