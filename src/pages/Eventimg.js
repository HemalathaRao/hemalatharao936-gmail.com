import React from 'react'
import {Link} from 'react-router-dom'
export default function Eventimg() {
    return (
       
        <div className="defaultHero">
         <div className='uploadimg'>
            <div class="wrapper">
  <div class="container">
    <h1>Upload a file</h1>
    <div class="upload-container">
      <div class="border-container">
        <div class="icons fa-4x">
          <i class="fas fa-file-image" data-fa-transform="shrink-3 down-2 left-6 rotate--45"></i>
          <i class="fas fa-file-alt" data-fa-transform="shrink-2 up-4"></i>
          <i class="fas fa-file-pdf" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
        </div>
        {/* <!--<input type="file" id="file-upload">--> */}
        <p>Drag and drop files here, or 
          <a href="/This PC" id="file-browser"> browse</a> your computer.</p>
      </div>
    </div>
  </div>
</div> 
<div id="row">
            <div className="card__action" id='column'>
				<Link to="/eventcategory" className="btn btn--primary btn-block" type="button">
					Back
				</Link>
			</div>
            <div className="card__action" id='column'>
				<Link to="/uploadimg" className="btn btn--primary btn-block" type="button">
					Next
				</Link>
			</div>
            </div>      

        </div>
        
        </div>
    )
}
