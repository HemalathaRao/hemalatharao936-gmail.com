import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/logo.png";
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaKey} from 'react-icons/fa'
import {FaUnlock} from 'react-icons/fa'
export default function Createevent() {
    return (
        <div className="defaultHero">
              {/* <div class="modal" id="cake">
   <div class="modal-dialog">
    <div class="modal-content"> */}
    
      {/* <!-- Modal Header --> */}
      {/* <div class="modal-header">
        <h4 class="modal-title">Cakes</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div> */}
      
      {/* <!-- Modal body --> */}
      {/* <div class="modal-body">
       <div class="centered">
          <img src="img/truffle.jpg" id="one"></img>
       </div>
       <div class="split right">
         <div class="centered">
            <h2><b> CAKES</b></h2>
               <p>Rs : 400/kg</p><p><b id="desc">Descriptions:</b><br></br>
                <b>Product Details:</b><br></br>
                  <b>Cake Flavour-</b> Truffle<br></br>
                        <b>Shape- </b>Round<br></br>
                      <b>Serves- </b>4-6 People<br></br>
                    <b>Size- </b>6 inches in Diameter<br></br>
                    <b id="note">Please Note:</b>

                      The cake stand, cutlery & accessories used in the image are only for representation purposes. They are not delivered with the cake.
                        This cake is hand delivered in a good quality cardboard box.
                <br></br>
                    <b>AVAILABILITY:</b><br></br> In stock
                <br></br>
                    <button id="cart" >Add to Cart   <i class="fa fa-shopping-cart" id="shopping"></i>    
                  </button><br></br>
            </p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </div> */}



{/* <a href='#mymodel' id="myBtn">Create Event</a> */}
<div className='card card-createevent is-active shadow-2dp'>
<div id="content">
{/* <div className="container"> */}
        {/* <h2>Create Your Event</h2> */}
{/* // </div> */}
<div className="container">
<form className="form" >
			<div className="card__content">
				<center><img className="image" src={logo} alt="logo"></img></center>
				
				<div className="inputfield">
				
					<input className="inputfield__input" type="text"></input>
					<label className="inputfield__label"> Event Name <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
                <div id="row">
                {/* <div className="field-container"> */}
				<div className="inputfield" id="column">
					<input className="inputfield__input" type="date"  ></input>
					<label className="inputfield__label">Event Start date <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
                {/* <div className="field-container"> */}
                <div className="inputfield" id="column">
					<input className="inputfield__input" type="date"></input>
					<label className="inputfield__label">Event End date <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div></div>
				<div class="inputfield">
					<input class="inputfield__input" type="text"></input>
					<label class="inputfield__label"> Colleege/Organization Name <i className="required">*</i></label>
					<span class="inputfield__underline"></span>
				</div>
				<div className="inputfield">
					<textarea className="inputfield__input" type="text"></textarea>
					<label className="inputfield__label"> Address <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
                <div className="inputfield">
					<textarea className="inputfield__input" type="text"></textarea>
					<label className="inputfield__label"> Description <i className="required">*</i></label>
					<span className="inputfield__underline"></span>
				</div>
			</div>
			<div className="card__action">
				<Link to="/eventcategory" className="btn btn--primary btn-block" type="button">
					Next
				</Link>
			</div></form>
</div>
</div>


            </div>
        </div>
    )
}
