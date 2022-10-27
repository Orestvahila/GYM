import React from "react";
import "./groupTraining.css"
import img from "../img/groupTraining.jpg"

function GroupTraining () {
    return (
        <div className="personalTraining">
            <div className="">
                <h2>GROUP TRAINING</h2>
                <h4>Work in groups to become a better you.</h4>
                <p>If you prefer to train in groups, we have 
                something to offer you. Our experienced instructors
                train small groups (10-12 people) and can attenrion
                to each person. We have different group classes theat
                will help you keep fit:</p>
                <ul>
                    <li><h4>Pilates;</h4></li>
                    <li><h4>Fitball aerobics</h4></li>
                    <li><h4>Yoga, etc.</h4></li>
                </ul>
                <p>At the same time, you meet wonderful people and
                train with great interest. You won't want to miss our
                workouts!</p>
            </div>
            <div>
                <img src={img} alt='group training'></img>
            </div>
        </div>
    )
}

export default GroupTraining;