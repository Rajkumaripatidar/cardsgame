import './card.css';
import {useState} from 'react';
import LogicCard from './LogicCard.jsx';

export default  function BaseCard (){
    return(
        <div className="basediv">
            <h2 className="baseCardH2">Let's Play Card Game!</h2>
            <div className="cardManager">
                <LogicCard ></LogicCard> 
            </div>
        </div>
    )
}