import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cep from "../src/Cep.js";
import "./styles.css";

const BasicCep = () => {
  const [cep, setCep] = useState("");
  return (
    <div style={{ marginBottom: "12px;" }}>
      <h2>Basic example</h2>
      <br />
      <Cep value={cep} onChange={(cep) => setCep(cep)} />
      <br />
      <h4>Masked value: {cep}</h4>
    </div>
  );
};

const CustomizedCep = () => {
  const [cep, setCep] = useState("");
  return (
    <div style={{ marginBottom: "12px;" }}>
      <h2>Customized input</h2>
      <br />
      <Cep
        value={cep}
        onChange={(cep) => setCep(cep)}
        className="customizedCep"
        placeholder="Digite seu cep"
      />
      <br />
      <h4>Masked value: {cep}</h4>
    </div>
  );
};

const App = () => {
  return (
    <>
      <BasicCep />
      <CustomizedCep />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
