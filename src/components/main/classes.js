import React from "react";
import More from "./more.js";
import Img1 from "../img/img (1).jpg";
import Img2 from "../img/img (2).jpg";
import Img3 from "../img/img (1).png";
import Img4 from "../img/img (2).png";
import './classes.css';

function Classes (){
    return (
<div className="classes">    
    <div className="ourClasses">
        <h5 className="backgroundTwo">CLASSES</h5>
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
</div>    
)}

export default Classes;