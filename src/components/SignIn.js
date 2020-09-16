import React from 'react';
import './SignIn.css';
import {productContext} from '../contexts/ProductContext';
import {withRouter} from 'react-router-dom';


class SignIn extends React.Component{
	
	static contextType = productContext;
	render(){
		const {onInputChange, 
		email, 
		password, 
		handleRegisterButton, 
		isRegistered, 
		handleSignUp, 
		handleSignIn} = this.context;
		
		const props = this.props;
		
		return (
			<div className="signin">
				<center>
					<img
						className="signin__logo"
						alt="amazon-logo"
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
					/>
					
					<div className='signin__container'>
							<h1>{isRegistered ? "Sign-In" : "Sign-Up"}</h1>

							<form onSubmit={!isRegistered ? ((e)=>handleSignUp(e, email, password, props)) : ((e)=>handleSignIn(e, email, password, props))}>
								<h5>E-mail</h5>
								<input onChange={onInputChange} name="email" type='text' value={email}  />

								<h5>Password</h5>
								<input onChange={onInputChange} name="password" type='password' value={password}  />

								{isRegistered ?
								(<button type='submit' className='signin__signInButton'>Sign In</button>)
								:
								(<button type='submit' className='signin__signInButton'>Sign Up</button>)
								}
							</form>

							<p>
								By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
								see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
							</p>

							{isRegistered && <button onClick={handleRegisterButton} className='signin__registerButton'>Create your Amazon Account</button>}
						
					</div>
				</center>
			</div>
			
		)
	}
}


export default withRouter(SignIn);