import React from 'react';
import "./Announcements.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from "@fortawesome/free-solid-svg-icons";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";


export default function Announcements() {
    return (
        <div class="announce">
            <h3>Create a new announcement</h3>
            <form action="">
                <input type="text" placeholder="Select class"/>
                <br/>
                <br/>
                <textarea name="text" id="" cols="82" rows="8" placeholder="What's new in the school?"></textarea>
               <div class="icon">
                <button class="iconbtn"><FontAwesomeIcon icon={faBold} /></button>   
                <button class="iconbtn"><FontAwesomeIcon icon={faItalic} /></button>   
                <button class="iconbtn"><FontAwesomeIcon icon={faPaperclip} /></button>
                <button class="iconbtn"><FontAwesomeIcon icon={faUpload} /></button>
               </div>
            <p>Tags: <button type="button" class="btn">All</button>  <button class="btn1" type="button">Important</button></p>
            <button type="submit" class="announcebtn">Announce</button>
            </form>
        </div>
    )
}
