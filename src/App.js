import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Order from './components/Order';
import SignIn from './components/SignIn';
import Prime from './components/Prime';
import Checkout from './components/Checkout';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import fire from './firebase';
import {productContext} from './contexts/ProductContext';



export default class App extends React.Component{
	static contextType = productContext
	
	componentDidMount(){
		const {setUser, setDisplayEmail} = this.context;
		fire.auth().onAuthStateChanged((user)=>{
			if(user){
				setUser(user)
				setDisplayEmail(user.email)
			
			}
			
			else{
				setUser("")
				setDisplayEmail("Guest")
			}
		})
	}
	
	
	
	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						
						<Route exact path="/">
							<Navbar />
							<Home />
						</Route>
						
						<Route path="/signin">
							<Navbar />
							<SignIn />
						</Route>
						
						<Route path="/order">
							<Navbar />
							<Order />
						</Route>
						
						<Route path="/prime">
							<Navbar />
							<Prime />
						</Route>
						
						<Route path="/checkout">
							<Navbar />
							<Checkout />
						</Route>
					</Switch>
				</BrowserRouter> 
			</div>
		)
	}
} 
