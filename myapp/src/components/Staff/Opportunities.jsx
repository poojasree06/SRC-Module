import React from 'react'
import Container from '../Navbar/components/Container';
import {StudentMainNav} from '../App.jsx'
import "./staff.css"
import StudentCard from './StudentCard';
import opportunites from "../../images/opportunites.svg"
function Opportunites(props) {
  return <div className="wrapper hover_collapse">
  <StudentMainNav></StudentMainNav>
  	<div class="main_container">
	<div class="container">
    <div class="main">
    <div className='head_wrap'>
    <span><img src={opportunites} style={{ width: "40px", height: "40px" }} alt="opportunities"/></span>
    <span><h1 id="head_text">Opportunites</h1></span>
    </div>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span>Lorem ipsum dolor</span><br></br>
          </p>
          <button class="btn card_btn">Apply Now</button>
        </div>
      </div>
    </li>
        <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span>Lorem ipsum dolor</span><br></br>
          </p>
          <button class="btn card_btn">Apply Now</button>
        </div>
      </div>
    </li>
        <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span>Lorem ipsum dolor</span><br></br>
          </p>
          <button class="btn card_btn">Apply Now</button>
        </div>
      </div>
    </li>
        <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span>Lorem ipsum dolor</span><br></br>
          </p>
          <button class="btn card_btn">Apply Now</button>
        </div>
      </div>
    </li>
        <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span>Lorem ipsum dolor</span><br></br>
          </p>
          <button class="btn card_btn">Apply Now</button>
        </div>
      </div>
    </li>
        <li class="cards_item">
      <div class="card">
        <div class="card_content">
          <br></br>
          <p class="card_text">
          <span className="head_content">Project Code</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Project Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Faculty Name</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content">Qualifications</span><span>Lorem ipsum dolor</span><br></br><br></br>
          <span className="head_content" >Salary Details</span><span>Lorem ipsum dolor</span><br></br>
          </p>
          <button class="btn card_btn">Apply Now</button>
        </div>
      </div>
    </li>
  </ul>
</div>
	</div>
  </div>
  </div>
}

export default Opportunites;