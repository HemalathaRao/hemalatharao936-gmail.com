import React, { Component } from 'react'
import logo from "../images/logo.png";
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaKey} from 'react-icons/fa'
import {FaUnlock} from 'react-icons/fa'
// import Login from "./Login"
import {Link} from 'react-router-dom'
export default class Registration extends Component {
    //  onClick(e){
    //     // console.log("hi")
    //     <div>{Login}</div>
    // }

    render() {
        return (
			<div className="defaultHero">
			<div className="card  card--register is-active shadow-2dp" id="registerForm">
            <form className="form" onSubmit={this.onSubmit}>
			<div className="card__content">
				<center><img className="image" src={logo} alt="logo"></img></center>
				
				<div className="inputfield">
				
					<input className="inputfield__input" type="email"></input>
					<label className="inputfield__label"><AiOutlineMail className="nav-icon "></AiOutlineMail> Email <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
				<div className="inputfield">
					<input className="inputfield__input" type="text"></input>
					<label className="inputfield__label"><AiOutlineUser className="nav-icon "></AiOutlineUser> Username <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
				<div class="inputfield">
					<input class="inputfield__input" type="password"></input>
					<label class="inputfield__label"> <FaKey className="nav-icon "></FaKey>Password <i className="required">*</i></label>
					<span class="inputfield__underline"></span>
				</div>
				<div className="inputfield">
					<input className="inputfield__input" type="password"></input>
					<label className="inputfield__label"> <FaUnlock className="nav-icon "></FaUnlock> Password Confirm <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
			</div>
			<div className="card__action">
				<button className="btn btn--primary btn--block" type="button">
					Create account
				</button>
			</div>
			<div className="card__action">
				{/* <button className="btn btn--secondry btn--block" data-toggle="form" data-target="logInForm" data-type="login" type="button" > */}
               <p className="text-center"data-toggle="form" data-target="logInForm" data-type="login" > 
			   <Link to="/login" >Already has an Account</Link> </p> 
				{/* </button> */}
			</div>
            </form>
			</div>
		</div>
// 		<div className="defaultHero">
// 		<form className="card card--register is-active" >
//   <h2>Register Form</h2>
//   <div class="input-container">
//     <i class="fa fa-user icon"></i>
//     <input class="input-field" type="text" placeholder="Username" name="usrnm"></input>
//   </div>

//   <div class="input-container">
//     <i class="fa fa-envelope icon"></i>
//     <input class="input-field" type="text" placeholder="Email" name="email"></input>
//   </div>

//   <div class="input-container">
//     <i class="fa fa-key icon"></i>
//     <input class="input-field" type="password" placeholder="Password" name="psw"></input>
//   </div>

//   <button type="submit" class="btn">Register</button>
// </form>
// 		</div>
		
        )     
    }
}
