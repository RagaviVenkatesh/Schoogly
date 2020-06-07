import React from "react";
import APIHandler from "./../api/handler";
import introImage from './introImage.png';
import "./Home.css";
import Group15 from './Group15.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import sideImage from './sideImage.png';
import Why from './Why.png';
import Rectangle from './Rectangle.png';


const handler = new APIHandler();

export default function Home() {
  handler
    .get("./")
    .then((apiRes) => console.log(apiRes.data))
    .catch((apiErr) => console.log(apiErr));

  return (
    
    <div>
      <section id="intro">
      <div class="part1">
        <h1>Make Parent-Teacher 
          Communication Happen</h1>
        <p>Anytime, anywhere, make parent teacher communication possible. Keep parents posted of their kid’s day at school and 
          partner with them in every stage of their kid’s education - It is a win win for everyone. </p>
          <br/>
          <button class="button" type="button">SIGN UP</button>
      </div>
      <div>
        <img class="introimg" src={introImage} alt="image"/>
      </div>
      </section>
      <br/>
      <section >
        <div class="works">
          <h3>How It Works</h3>
          <img src={Group15} alt="line"/>
          <p>The onboarding process of teachers & parents on to Schoology is super easy. 
            In less than 15 minutes, you can set up the classroom and connect with parents.</p>
        </div>
        <div class="cards">
          <div class="card">
            <FontAwesomeIcon class="cardicon" icon={faUser} />
            <h3>Sign up</h3>
            <p>Sign up for free as a school <br></br >or an instituition and get  <br></br> access to Schoology</p>
          </div>
          <div class="card">
            <FontAwesomeIcon class="cardicon" icon={faChalkboard} />
            <h3>Set up classroom</h3>
            <p>Invite teachers, students and <br></br> their parents to the <br></br> classroom</p>
          </div>
          <div class="card">
            <FontAwesomeIcon class="cardicon" icon={faEnvelope} />
            <h3>Set up classroom</h3>
            <p>Invite teachers, students and <br></br> their parents to the  <br></br> classroom</p>
          </div>
          </div>
      </section>
      <section id="teachers">
        <div>
        <img class="sideimg" src={sideImage} alt="image"/>
        </div>
        <div class="part2">
          <h1>Open Up a Window of Possibilities <br/> for Teachers</h1>
          <p>The truth is you not only make parent-teacher communication seamless,<br/> 
            but you also open up a window of possibilities for teacher</p>
          <ul>
          <li>Reach any parent any time with instant messaging</li>
          <li>Parents get to stay in the know of their kid’s education, making <br/> them accountable</li>
          <li>Schedule meetings with parents anytime anywhere</li>
          <li>Save real time - No more emails, school diaries and phone calls. </li>
          </ul>
        </div>
      </section>
      <section id="id">
        <h2>Why Schools love Schoology</h2>
        <img class="why" src={Why} alt="image"/>
        <img class="rectangle" src={Rectangle} alt="image"/>
        <div class="number">
            <p class="label1">
              <label>26000+</label>
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              <label>1600+</label>
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              <label>900+</label>
            </p>
            <p class="label2">
              <label class="lab1">Students </label>
              <label class="lab2">Teachers</label>
              <label class="lab3">Schools</label>
            </p>
        </div>
      </section>
      <div class="footer">
        <p>Get in touch with us @ 9999999999</p>
      </div>
    </div>
  );
}

