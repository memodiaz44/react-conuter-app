import React from "react";
import "../Stylesheets/Button.css"

const Button1 = ({ text, isClickButtom, manageClick  }) => {
    return ( 
        <button 
        className= {isClickButtom ? "click-button" : 'restart-button'} 
        onClick={manageClick}>
            {text}


        </button>
    )



}

export default Button1