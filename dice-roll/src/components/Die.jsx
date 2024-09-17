import React from "react";
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import face1 from "./face1.svg"

function Die(face, rolling) {

    const dieFace = "face" + face;

return (
    <div>
        {/* <FontAwesomeIcon icon={[`fa-solid fa-dice-${face}`]} className={`Dice ${rolling && 'Dice-shaking'}`}/> */}
        <img src={dieFace} alt={face} className={`Dice ${rolling && 'Dice-shaking'}`}/>

        
    </div>
)
}
export default Die;