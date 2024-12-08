let Myimg1="https://i.pinimg.com/236x/64/18/c0/6418c07d677d154e6eec34217931bd62.jpg";
let Myimg2="https://i.pinimg.com/236x/e8/d0/50/e8d050e1412d4866d34f9a41b0c48238.jpg";
let Myimg3="https://i.pinimg.com/474x/68/4b/c3/684bc3570005b3f1ec80b745dabc07a0.jpg";
let Myimg4="https://i.pinimg.com/236x/ab/b4/8c/abb48cff1253643a45657026c17dfa4a.jpg";
let Myimg5="https://i.pinimg.com/236x/f6/25/15/f62515e5e3315199efebb21388d9e669.jpg";
let Myimg6="https://i.pinimg.com/236x/06/08/bf/0608bf89f936ba50ca68a96d4b5d5b8e.jpg";
let Myimg8="https://i.pinimg.com/236x/b8/c9/a3/b8c9a30538ae77ad8b69397e151e299a.jpg";
let Myimg7="https://i.pinimg.com/236x/32/b8/bf/32b8bf4cb02b39efc28ddbad65b566b7.jpg";
let Myimg9="https://i.pinimg.com/236x/69/dc/cb/69dccb48e1fce4aa942788a6d5defa71.jpg";
let Myimg10="https://i.pinimg.com/236x/f4/f2/c5/f4f2c5d809f9c43a0bfc31723af746a2.jpg";
let Myimg11="https://i.pinimg.com/236x/9c/88/e5/9c88e5092049ad79f9710194fe63a195.jpg";
let Myimg12="https://i.pinimg.com/236x/7e/14/2e/7e142eb0da2a076738ce31f108fb7193.jpg";
import './cardss.css'



export default function PlayerCard({PlayerCount}){
   
    let GameArr=[Myimg1, Myimg2, Myimg3,Myimg4, Myimg5,Myimg6 ,Myimg7, Myimg8, Myimg9,Myimg10, Myimg11,Myimg12];

    let GameCardGen=(el)=> {
  return  GameArr.indexOf(el) === PlayerCount;
}

    let result = GameArr.filter(GameCardGen);

    return(
        <div>
            <img src={result} ></img>
        </div>
    )

}
