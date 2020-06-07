import React from 'react';
import './Meeting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from "@fortawesome/free-solid-svg-icons";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";


export default function Meeting() {
    return (
        <div class="meeting">
            <h3>Create a new meeting</h3>
            <form action="#">
                <label>Add a team</label>
                <br/>
                <input type="text"  placeholder="Select class/students/teacher"/>
                <br/><br/>
                <table>
                    <tr>
                        <td>Day</td>
                        <td>Start Time</td>
                        <td>End Time</td>
                    </tr>
                    <tr>
                        <td><input type="text" id="date" type="date" defaultValue="2017-05-24"/></td>
                        <td><input type="time" id="time" defaultValue="10:00"/></td>
                        <td><input type="time" id="time" defaultValue="10:00"/></td>
                    </tr>
                </table>
                <br/>
                <label>Meeting Agenda</label>
                <br/>
                <textarea name="text" id="" cols="82" rows="8" placeholder="How goes the meeting agenda"></textarea>
                <div class="icon">
                <button class="iconbtn"><FontAwesomeIcon icon={faBold} /></button>   
                <button class="iconbtn"><FontAwesomeIcon icon={faItalic} /></button>   
                <button class="iconbtn"><FontAwesomeIcon icon={faPaperclip} /></button>
                <button class="iconbtn"><FontAwesomeIcon icon={faUpload} /></button>
               </div>
               <br/>
            <button class="announcebtn" type="submit">SCHEDULE</button>
            </form>
        </div>
    )
}
