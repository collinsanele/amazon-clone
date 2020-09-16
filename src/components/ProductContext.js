import React, {createContext} from 'react';


export const productContext = createContext();


export default class ProductContextProvider extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			basket = []
		}
	}
	
	
	
	addToBasket = (e)=>{
		this.setState({basket: [...this.state.basket, {productId: e.target.id}]})
	}
	
	
	
	render(){
		return (
			<productContext.Provider value{{...this.state, addToBasket: this.addToBasket}}>
				{this.props.children}
			</productContext.Provider>
			
		)
	}
	
	
	
}