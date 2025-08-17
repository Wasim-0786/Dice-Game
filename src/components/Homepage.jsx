import React from "react";


const Homepage = ({toggle}) => {


  return (
    <div className="  h-[522px m-auto mt-32 flex justify-center items-center">

      <div className="w-[649px] h-[522px] m-0">
        <img className="w-[649px]" src="images/dices 1.png" alt="dice logo" />
      </div>

      <div className="flex w-[528px] items-center">

        <div className="flex-col w-[528px]">
          <h1 className="text-8xl font-extrabold">DICE GAME</h1>
          <div className="flex justify-end">
            <button onClick={toggle}
            className=" w-[220px] h-[44px] bg-black text-white rounded p-1">
              Play Now
            </button>
         </div>
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;
