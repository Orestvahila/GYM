import React from "react";
import './main.css';
import Classes from "./classes";
import PersonalTraining from "./personalTraining";
import GroupTraining from "./groupTraining";
import SmallPic1 from "../img/004-diet food.svg";
import SmallPic2 from "../img/024-checklist.svg";
import SmallPic3 from "../img/029-bicycle.svg";
import SmallPic4 from "../img/037-sportwoman.svg";
import OurTrainers from './ourTrainers'



function Main (){
    return (
        <div>
            <div className="main">  
                <h5 className="background">FITNES</h5>
                <h2>GET FIT AND<br/>FEEL <span className="yellowText">GREAT!</span></h2>
                <p>Our profesional instructors will help you stay active and healthy.</p>
                <input className="yellowBtn" type={"button"} value={'JOIN NOW'}></input>
            </div>
            <Classes/>
            <PersonalTraining />
            <div className="smallPic">
                <div>
                    <img src={SmallPic1}></img>
                    <h3>FULLY EQUIPPED GYM</h3>
                    <p>Our spacious gym is suitable
                    for group lessons and has all the
                    necessary equipment.</p>
                </div>
                <div>
                    <img src={SmallPic2}></img>
                    <h3>SELECT YOUR ACTIVITY</h3>
                    <p>Choose the activities which
                    suit you and don't pay for the
                    unnecessary ones.</p>
                </div>
                <div>
                    <img src={SmallPic3}></img>
                    <h3>OPEN FOR ANYONE</h3>
                    <p>Whatever your fitness
                    level is, you can attend
                    our fitness classes at any
                    time.</p>
                </div>
                <div>
                <img src={SmallPic4}></img>
                    <h3>FLEXIBLE PRICES</h3>
                    <p>You can select a training
                    plan, instructor, and schedule
                    suitable for you.</p>
                </div>
            </div>
            <GroupTraining />
            <OurTrainers />
        </div>
    )
}

export default Main;