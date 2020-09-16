import React, {createContext} from 'react';
import fire from '../firebase';
//import {withRouter} from 'react-router-dom';


export const productContext = createContext();


class ProductContextProvider extends React.Component{
	constructor(props){
		super(props)
		this.state= {
				products: [
					{productId: "12321341", 
					productTitle: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback", 
					productPrice: "11.96",
					productRating: 5,
					productImage: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
					productRowType: "two"
					},
					
					{
						productId: "49538094",
						productTitle: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
						productPrice: "239.0",
						productRating: 4,
						productImage: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
						productRowType: "two"
						
					},
					
					{
						productId: "4903850",
						productTitle: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
						productPrice: "199.99",
						productRating: 3,
						productImage: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
						productRowType: "three"
						
					},
					
					{
						productId: "23445930",
						productTitle: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
						productPrice: "98.99",
						productRating: 5,
						productImage: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
						productRowType: "three"
						
					},
					
					{
						productId: "3254354345",
						productTitle: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
						productPrice: "598.99",
						productRating: 4,
						productImage: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
						productRowType: "three"
						
					},
					
					{
						productId: "90829332",
						productTitle: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
						productPrice: "1094.98",
						productRating: 4,
						productImage: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
						productRowType: "one"
						
					},
					
					
					
				],
				
				basket: [],
				email: "",
				password: "",
				user: "",
				isRegistered: true,
				displayEmail: "Guest"
		}
		
		
	}
	
	
	
	
	
	
	addToBasket = (e)=>{
		const isInBasket = this.state.basket.find(item=> parseInt(item.productId) === parseInt(e.target.getAttribute('data-id')))
		//console.log(isInBasket)
		 !isInBasket && this.setState(
			{
				basket: [...this.state.basket, 
					{productId: e.target.getAttribute('data-id'), 
					productTitle: e.target.getAttribute('data-title'), 
					productPrice: e.target.getAttribute('data-price'),
					productRating: e.target.getAttribute('data-rating'),
					productImage: e.target.getAttribute('data-image')}
				]
			}
		)
	}
	
	
	getBasketTotal =(basketArray)=>{
		let total = 0;
		basketArray.forEach(item=>{
			total+=parseFloat(item.productPrice.replace("$", "").trim())
		})
		
		return total
		
	}
	
	
	
	removeFromBasket = (e, basketArray)=>{
		const itemToRemoveId = e.target.getAttribute("data-id")
		const newBasketArray = basketArray.filter(item=> parseInt(item.productId) !== parseInt(itemToRemoveId) )
		this.setState({basket: newBasketArray})
	}
	
	
	
	
	onInputChange = (e)=>{
		this.setState({[e.target.name]: e.target.value.trim()})
	}
	
	

	
	
	//sign up
	handleSignUp =(e, email, password, props)=>{
		e.preventDefault()
		fire.auth().createUserWithEmailAndPassword(email, password)
		.then(authObj=>{
			this.setState({displayEmail: authObj.user.email})
			props.history.push('/')
			}
		)
		.catch(err=> alert(err.message))
	}
	
	
	//sign in
	handleSignIn =(e, email, password, props)=>{
		e.preventDefault()
		fire.auth().signInWithEmailAndPassword(email, password)
		.then(authObj=> {
			this.setState({displayEmail: authObj.user.email})
			props.history.push('/')
			}
		)
		.catch(err=> alert(err.message))
	}
	
	
	//sign out
	handleSignOut =(props)=> {
		fire.auth().signOut()
		this.setState({user: "", isRegistered: true, displayEmail: "Guest"})  
	}
	
	
	//set user function
	setUser =(user)=>{
		this.setState({user: user})
	}
	
	
	//when sign up btn is clicked
	handleRegisterButton = ()=>{
		this.setState({isRegistered: false})
	}
	
	
	//when sign up btn/link is clicked
	handleSignInButton = ()=>{
		this.setState({isRegistered: true})
	}
	
	//set displayEmail
	setDisplayEmail = (value)=>{
		this.setState({displayEmail: value})
	}
		
	
	
	
	
	
	
	render(){
		return (
			<productContext.Provider value={{...this.state, 
				addToBasket: this.addToBasket, 
				getBasketTotal: this.getBasketTotal, 
				removeFromBasket: this.removeFromBasket,
				onInputChange: this.onInputChange,
				handleSignUp: this.handleSignUp,
				handleSignIn: this.handleSignIn,
				handleSignOut: this.handleSignOut,
				setUser: this.setUser,
				handleRegisterButton: this.handleRegisterButton,
				handleSignInButton: this.handleSignInButton,
				setDisplayEmail: this.setDisplayEmail
				}}
			>
				{this.props.children}
			</productContext.Provider>
			
		)
	}
	
	
	
}




export default ProductContextProvider;