import React from "react"

export default function Die ({num, isHeld, holdDice}) {
    return(
        <div className={isHeld ? "catched single-die" : "single-die"} onClick={holdDice}>
            <h2 className="die">{num}</h2>
        </div>
    )
}