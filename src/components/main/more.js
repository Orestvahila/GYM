import React, { useState } from "react";
import './more.css';


function More ({name, children}){
    const [isReadMoreShown, setReadMoreShown]=
    useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }

    return(
        <div className="reed-more">
            <button onClick={toggleBtn}> {isReadMoreShown ? 
            `${name} -` : `${name} +`}</button>
            {isReadMoreShown ? <p>{children}</p> : children.
            substr(0, 0)}
        </div>
    )
}

export default More;