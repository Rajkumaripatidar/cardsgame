import {useState} from 'react';
import PlayerCard from './playerCard.jsx';
import BtnContainer from './btnContainer.jsx';
import GameCard from './GameCard1.jsx';
import './logic.css'

export default function LogicCard({styleBtn}){
    let[ count, setCount]= useState(Math.floor(Math.random()*13));
    let [randomCount, setRandomCount]= useState();
    let [count1, setCount1]=useState(1)
    let [nextBtn, setNextBtn]= useState("none")
    let [nameone, setNameone]=useState("none");
    let [nameone1, setNameone1]=useState(null);

    let gameStart=()=>{
        setNameone(
            null
        );
        setNameone1(
            "none"
        );
        setCount1(1)
        setRandomCount();
    }

    let restartAgain=()=>{
        setNameone1(
            null
        );
        setNameone(
            "none"
        )

    };

    
    let createRandom=()=>{
        setCount(Math.floor(Math.random()*13))
        setCount1(count1+1);
        console.log(count1);
        console.log(count);
        
    }
    let GenNum=()=>{
        setRandomCount(Math.floor(Math.random()*13));
        setNextBtn(
            null
        )
    console.log(randomCount);

    }

    let iscondiOneNextBtn= count==randomCount;
    let iscondiOneGentBtn= count!=randomCount;
    let isstyleforNext= count1!=3;

    return (
        <div className="logic">
            <button onClick={gameStart} style={{display:nameone1}} className="btnStart">Start</button>
            <div style={{display:nameone}}>
                <h2>Level  : {count1}</h2>
                <h6>(For win both cards should be same!)</h6>
                <div className="carddiv">
                <GameCard styleGameCard={nameone} GameCount={count}></GameCard>
                <PlayerCard PlayerCount={randomCount} ></PlayerCard>
                </div>
                <BtnContainer action1={createRandom} action2={GenNum} styleBtn1={nameone} iscondiOneNextBtn={iscondiOneNextBtn} iscondiOneGentBtn={iscondiOneGentBtn} styleforNext={count1}></BtnContainer>
                {
                !isstyleforNext ? (
                    <div> 
                        <h1 style={{display: !iscondiOneNextBtn ? "none": null}}>Congratulations You Won!</h1>
                        <button className="resstartbtn" onClick={restartAgain} style={{display: !iscondiOneNextBtn ? "none": null}}>Restart</button>
                    </div>
                ):null
            }
        </div>
        </div>
    )
}