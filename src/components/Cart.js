import React from "react"

function Cart(){

    const [amount, setAmount] =React.useState(0)
    return(

    <div> cart ({amount})</div>
    )
}


export default Cart