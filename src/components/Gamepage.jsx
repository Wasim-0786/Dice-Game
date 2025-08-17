import React, { useState } from "react";

const Gamepage = () => {

  const array = [1,2,3,4,5,6];
  const [selectNumber, setSelectNumber] = useState(null);
  const [diceValue, setDiceValue] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [error, setError] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const numberSelecterError = (value) => {
     setSelectNumber(value);
     setError("");
  }

  const rollDice = () => {  
    if(!selectNumber){
      setError("You have not selected any number");
      return;
    }
    else{
      setError("");
    }

    const rolledValue = Math.floor(Math.random()*6)+1;
    setDiceValue(rolledValue);

    if(selectNumber === rolledValue) {
      setScore((prev) => prev + rolledValue);
    }

    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectNumber(null);
    setDiceValue(1);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  }

  return (
    <>
      <nav className="m-auto max-w-[1290px] h-[151px]  mt-16 flex justify-between">
        <div className="w-[135px] h-[151px]">
          <div className=" h-[96px] flex justify-center">
            <h1 className="text-8xl font-semibold">{score}</h1>
          </div>
          <div className=" h-[36px] flex justify-center">
            <h4 className="text-2xl">Total Score</h4>
          </div>
        </div>

        <div className="max-w-[552px] h-[138px] flex-col  gap-5 justify-between items-center"> 
          <p className="text-red-700 m-2 flex place-self-end">{error}</p>
          <div className="max-w-[552px] h-[72px] flex gap-6">
            {
              array.map((value,i) => (
                <div   
                key={i}
                onClick={() => numberSelecterError(value)}
                className={`cursor-pointer border-2 border-zinc-700 w-[72px] h-[72px] text-[24px] font-bold grid place-items-center ${value === selectNumber ? "bg-black text-white" : "bg-white text-black"}`}>{value}</div>
              ))
            }
          </div>
          <div className="min-w-[182px] h-[36px] flex items-end justify-end mt-7">
            <p className="font-medium text-3xl ">Select Number</p>
          </div>
        </div>
      </nav>

      <div className=" m-auto max-w-[250px] h-[449px] mt-20">
        <div className="flex-col mb-10 justify-items-center">
            <img src={`/images/dice_${diceValue}.png`} alt="dice1"
                 onClick={rollDice} 
                 className="cursor-pointer"/>
            <p className="text-3xl">Click on Dice to roll</p>
        </div>
        <div className="flex-col justify-items-center">
            <div className="m-5"><button className="min-w-[220px] h-[44px] border-2 border-gray-600" onClick={resetScore}>Reset Score</button></div>
            <div className="m-5"><button className="min-w-[220px] h-[44px] border-2 border-gray-600 bg-black text-white" onClick={toggleRules}>{showRules ? "Hide Rules" : "Show Rules"}</button></div> 
        </div>
      </div>

      {showRules && (
        <div className="max-w-[600px] mx-auto mt-10 text-lg border p-5 rounded-lg bg-red-50">
          <h3 className="text-2xl font-bold mb-4">Game Rules</h3>
          <ul className="text-base list-disc pl-5">
            <li>Select a number between 1 to 6.</li>
            <li>Click the dice to roll it.</li>
            <li>If your selected number matches the dice, your score increases by that number.</li>
            <li>If it doesn't match, your score stays the same.</li>
            <li>Click "Reset Score" to start over.</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Gamepage;
