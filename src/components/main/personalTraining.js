import "./personalTraining.css"
import React from "react"
import Img from '../img/personalTraining.jpg'

function PersonalTraining () {
    return (
        <div className="personalTraining">
            <div>
                 <img src={Img} alt="personal training"></img>
            </div>
            <div className="pertr">
                <h2>PERSONAL TRAINING</h2>
                <h4>Maximum results and flexible training schedule.</h4>
                <p>Group training is not for everyone. If you want to train
                1-on-1, FitB offers you personal training to work on your 
                individual skills and achieve fitness goals. Our personal 
                trainers are dedicated to providing you with the best 
                fitness experience possible.</p>
                <input className="yellowBtn" type={"button"} value='EXPLORE TRAINING'></input>
            </div>
        </div>
    )
}

export default PersonalTraining;