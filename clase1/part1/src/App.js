import { useState } from "react";
import "./App.css";

const Mesage = (props) => {
  return <div>{`Hola estamos trabajadno en ello ${props.message}`}</div>;
};

const Description = ()=>{
  return(
    <div>
      <h1>{'Me encanta'}</h1>
    </div>
  )
}

function App() {
  const mensaje = "Hola mundo";
  const num1 = 2;
  const num2 = 3;

  return (
    <div className="App">
      {mensaje + " evaluacion en JSX"}
      <br />
      <p>Mai tiene estos a;os</p>
      {num1 + num2}
      <div>
        <div>
          <Description></Description>
          <Mesage message={"hola"}></Mesage>
        </div>
      </div>
    </div>
  );
}

export default App;
