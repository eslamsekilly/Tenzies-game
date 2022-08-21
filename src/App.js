import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'

export default function App () {
    const [randomNum, setRandomNum] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

React.useEffect(()=>{
    const trueHeld = randomNum.every(n => n.isHeld)
    const valuenum = randomNum[0].value
    const allVal = randomNum.every(m => m.value === valuenum)
    if(trueHeld && allVal){
        setTenzies(true)
    }

    
},[randomNum])


    function allNewDice () {
        var randomNumbers = [];
        for(let i = 0; i < 10; i++){
         const num = Math.floor(Math.random() * 6) + 1;
         randomNumbers.push({value: num,isHeld: false, id:nanoid()})
        }
        return randomNumbers   
    }
  


    function holdDice (id){
        setRandomNum(randomNum =>(randomNum.map(item => {
            if(item.id == id){
              return  {...item , isHeld: !item.isHeld}
            }
        return item
        }
        )
    ))}
    const rollFunc = ()=>{
        
       return setRandomNum(randomNum.map( item=> {
        return item.isHeld == false ? {...item, value:Math.floor(Math.random() * 6) + 1} : item
       }))
    }
    return(
      tenzies ? <main><h1 className="won">You have won, Please delete the game right now !!!</h1></main> : (<main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container"> 
                {randomNum.map(item => <Die num={item.value} key={item.id} isHeld={item.isHeld} holdDice={() => holdDice(item.id)}/>)}
            </div>
            <button onClick={rollFunc}>Roll</button>
        </main>)
    )
}