import React from 'react';
import './Home.css';
import ProductList from './ProductList';
import Footer from './Footer';


export default class Home extends React.Component{
	render(){
		return (
			<div className="home">
				<img className="home__banner" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="amazon-banner" 
				/>
				<ProductList />
				<Footer />
			</div>
			
		)
	}
}