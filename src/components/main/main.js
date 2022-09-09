import React from "react";
import './main.css';
import More from "./more.js";
import Img1 from "../img/img (1).jpg";
import Img2 from "../img/img (2).jpg";
import Img3 from "../img/img (1).png";
import Img4 from "../img/img (2).png";
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
            <div className="ourClasses">
                <h5 className="background">CLASSES</h5>
                <h2>OUR CLASSES</h2>
                <p>Whatever your fitness goals are, our dedicated 
                    fitness instructors will help you achieve them.</p>
            </div>
            <div className="more">
                <div>
                <img src={Img1}></img>
                <More name={'MAXFIT'}>
                    MaxFit is an extensive training 
                    class that will help your body 
                    work at maximum load from the 
                    start to the end of your workout
                    to gain the best results faster.
                </More>
                </div>
                <div>
                <img src={Img2}></img>
                <More name={'CAMPFIT'}>
                    Have fun while mixing your interval
                    training, body weight exercises, and
                    strength training!
                </More>
                </div>
                <div>
                <img src={Img3}></img>
                <More name={'POWERFIT'}>
                    PowerFit is a high strength training 
                    class which uses barbells/cardio to 
                    get maximum results.
                </More>
                </div>
                <div>
                <img src={Img4}></img>
                <More name={'SPINFIT'}>
                    The members of SpinFit use the stationary
                    bike which imitates the real world bicycle
                    obstacle course with the capacity to burn
                    more than 500 calories per class.
                </More>
                </div>
            </div>
            <div className="ourClasses">
                <input className="yellowBtn" type={"button"} value={'ALL CLASSES'}></input>
            </div>
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