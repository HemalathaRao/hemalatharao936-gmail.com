import React, {Component} from 'react'
import logo from "../images/logo.png";
// import { render } from '@testing-library/react'
import {Link} from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {FaKey} from 'react-icons/fa'

export default class Login extends Component {
    render(){
    return (
		<div className="defaultHero">
        <div className="card card--login shadow-2dp is-active" id="logInForm">
		<div class="card__content">
			<center>
            <img className="image" src={logo} alt="logo" ></img>
            </center>
			
			<div class="inputfield">
				<input className="inputfield__input" type="text"></input>
				<label className="inputfield__label"><AiOutlineUser className="nav-icon "></AiOutlineUser> Username</label>
				<span className="inputfield__underline"></span>
			</div>
			<div className="inputfield">
				<input className="inputfield__input" type="password"></input>
				<label className="inputfield__label"><FaKey className="nav-icon "></FaKey> Password</label>
				<span className="inputfield__underline"></span>
			</div>
			<span className="toggle toggle--block toggle--center">
				<input className="toggle__input" type="checkbox" id="remember"></input>
				<label className="toggle__label" for="remember">Remember me?</label>
				<label className="toggle__checkbox" for="remember">
					<span className="sr-only">Toggle remember me.</span>
					<svg className="toggle__checkbox-mark" viewBox="0 0 18 18" aria-label="check"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"></path></svg>
				</label>
			</span>

			<p className="text-center"
            data-toggle="form" data-target="amnesiaForm" data-type="amnesia"> <Link to="/forgot">Forgot your password?</Link></p>
		</div>
		<div className="card__action">
			<button className="btn btn--primary btn--block" type="button">
				Sign in
			</button>
		</div>
		<div class="card__action">
			{/* <button className="btn btn--secondry btn--block" data-toggle="form" data-target="registerForm" data-type="register" type="button"> */}
				<p className="text-center" data-toggle="form" data-target="registerForm" data-type="register" >
				<Link to="/signup" >Not a Member? Create Account</Link> </p>
			{/* </button> */}
		</div>
	</div>
</div>
    )
    }
}
