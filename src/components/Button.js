import React from "react"
import Cart from "./Cart"
import "./Button.scss"

function Button(){
    const [active, setActive]= React.useState(false)
  
   
    function bought(){
        setActive(!active)
       setAmount(amount ++)

    }


    return(
        <button className="button" onClick={bought}> {active? 'bought' : 'purchase'}</button>
    )
}

export default Button