import React from 'react';
import './Navbar.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {NavLink} from 'react-router-dom';
import {productContext} from '../contexts/ProductContext';
//import { IconButton } from '@material-ui/core';


export default class Navbar extends React.Component{
	static contextType = productContext;
	render(){
		const {basket, 
		user, 
		handleSignInButton, 
		handleSignOut, 
		displayEmail} = this.context;
		
		
		
		
		return (
			<nav className="navbar sticky-top">
				<NavLink to="/" className="navbar__link">
					<img className="navbar__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo" />
				</NavLink>
				
				<div className="navbar__input-wrapper">
					<input type="text" />
					<SearchIcon className="navbar__search-icon"/>
				</div>
				
				{user ? 
					(<NavLink onClick={()=>handleSignOut()} to= "/" className="navbar__link">
						<div className="navbar__hello">
							<span className="navbar__hello-one">Hello {displayEmail}</span>
							<span className="navbar__hello-two">Sign Out</span>
						</div>
					</NavLink>)
					
					: 
					
					(<NavLink onClick={handleSignInButton} to="/signin" className="navbar__link">
						<div className="navbar__hello">
								<span className="navbar__hello-one">Hello {displayEmail}</span>
								<span className="navbar__hello-two">Sign In</span>
						</div>
					</NavLink>
					)
				}
					
				
				
				<NavLink to="/" className="navbar__link">
					<div className="navbar__returns">
						<span className="navbar__hello-one">Returns</span>
						<span className="navbar__hello-two">& Orders</span>
					</div>
				</NavLink>
				
				<NavLink to="/" className="navbar__link">
					<div className="navbar__prime">
						<span className="navbar__hello-one">Your</span>
						<span className="navbar__hello-two">Prime</span>
					</div>
				</NavLink>
				
				<NavLink to="/checkout" className="navbar__link">
					<div className="navbar__basket">
						<ShoppingBasketIcon />
						<span className="navbar__item-count">{basket.length}</span>
					</div>
				</NavLink>
				
				
				
			</nav>
		)
	}
}