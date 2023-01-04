import React, { useState } from "react";

function Count () {

  const [ countSecond, setCountSecond ] = useState(0);
  const [ countThird, setCountThird ] = useState(0);
  const [ countFourth , setCountFourth ] = useState(0);
  const [ countInput , setCountInput ] = useState(0);

return(
<div className="App" >
<p>You clicked {countSecond} times</p>
      <button onClick={() => setCountSecond(countSecond + 1)}>
        Click me
      </button>
     
      <p> {countSecond === 10 ? "count равен 10" : countSecond > 10 ? "count больше 10" : "count меньше 10"} </p>

      <p>You clicked { countThird } times</p>
      <div>
      <button onClick={() => setCountThird(countThird + 1)}>
        Add
      </button>
      <button onClick={() => setCountThird(countThird - 1)}>
        Minus
      </button>
      </div>
      <div>
       <p>You clicked { countFourth } times</p>
      <button onClick={() => setCountFourth (countFourth  + 1)}>
        Add
      </button>
      <button onClick={() => setCountFourth (countFourth  + 5)}>
        Add 5
      </button>
      <button onClick={() => setCountFourth (countFourth  + 10)}>
        Add 10
      </button>
      <button onClick={() => setCountFourth (countFourth  * countFourth)}>
      Squared
      </button>
      </div>

      <div>
        <input 
        type = "text"
        min = {2}
        max = {5}
        value = {countInput}
        onChange={(e) => {
        setCountInput(e.target.value)
        console.log(e);
        console.log(e.target.value.length);
                     
        }}        
        ></input>
        <button onClick={() => {
        
            setCountInput(countInput)
          }
        }
        >
          Отправить
        </button>
         <p> {countInput.length > 5 ? "Количество символов слишком велико" : countInput.length < 2 ? "Количество символов слишком мало" : "Все отлично"} </p>
      </div>
     </div> 
)
  };

  export default Count;