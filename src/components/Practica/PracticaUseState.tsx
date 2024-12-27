import { useState } from "react";
//import { Button } from "../Button/Button";

export const PracticaUseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Luisa");

  const countMore = () => {
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setName("La Peter");
  };

  return (
    <>
    <h3>Practica UseState</h3> 
    <button onClick={countMore}>Count is {count}</button>   
    {/* <Button label={`Count is ${count}`} parentMethod={countMore} /> */}
    <p>{name}</p>
    <button onClick={changeName}>Change name</button>
    {/* <Button label="Change name" parentMethod={changeName} /> */}
    </>
  )
};

export default PracticaUseState;
