import React, { useState } from "react";
import './RollDice.css';
import Die from "./Die";

function RollDice() {
    /* const sides = ['one', 'two', 'three', 'four', 'five', 'six']; */
    const [side1, setSide1] = useState("1");
    const [side2, setSide2] = useState("1");
    const [rolling, setRolling] = useState(false);

    const roll = () =>  {
        setRolling(true);
        setSide1([(Math.floor(Math.random() * 6))]);
        setSide2([(Math.floor(Math.random() * 6))]);
        console.log([(Math.floor(Math.random() * 6))]);
        console.log(side1);

        setTimeout(() => {
            setRolling(false);
        }, 1000)
    }

    return(
        <div className="rollDice">
            <div className="rolldiceContainer">
                <Die face={side1[0]} rolling={rolling} />
                <Die face={side2} rolling={rolling} />
            </div>
            <button
                className="rollBtn"
                disabled={rolling}
                onClick={() => roll()}>
                    {rolling ? 'Rolling' : 'Roll Dice!'}
            </button>
        </div>
    )
}

export default RollDice;