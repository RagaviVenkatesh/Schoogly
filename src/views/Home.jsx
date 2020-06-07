import React from "react";
import APIHandler from "./../api/handler";
import introImage from './introImage.png';
import "./Home.css";
import Group15 from './Group15.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";


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
            <FontAwesomeIcon icon={faUser} />
            <h4>Sign up</h4>
            <p>Sign up for free as a school or an instituition and get access to Schoology</p>
          </div>
          <div class="card">
            <FontAwesomeIcon icon={faUser} />
            <h4>Sign up</h4>
            <p>Sign up for free as a school or an instituition and get access to Schoology</p>
          </div>
          <div class="card">
            <FontAwesomeIcon icon={faUser} />
            <h4>Sign up</h4>
            <p>Sign up for free as a school or an instituition and get access to Schoology</p>
          </div>
          </div>
      </section>
    </div>
  );
}

