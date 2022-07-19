import React from "react";
import { useParams } from "react-router-dom";

const Input = () => {
  const { type } = useParams();

  const handleAdd = () => {
    const form = document.getElementById("form");
    const fgroup = document.createElement("div");
    const inner1 = document.createElement("div");
    const inner2 = document.createElement("div");
    const inner1_h5 = document.createElement("h5");
    const inner1_inp = document.createElement("input");
    const inner2_h5 = document.createElement("h5");
    const inner2_inp = document.createElement("input");

    form.appendChild(fgroup);
    fgroup.setAttribute("class", "f-group");
    inner1.setAttribute("class", "inner");
    inner2.setAttribute("class", "inner");
    inner1_h5.textContent = "Variable Name";
    inner2_h5.textContent = "Variable Value";

    fgroup.appendChild(inner1);
    fgroup.appendChild(inner2);

    inner1.appendChild(inner1_h5);
    inner1.appendChild(inner1_inp);
    inner2.appendChild(inner2_h5);
    inner2.appendChild(inner2_inp);
  };

  return (
    <div className="inp-cont">
      <div className="head">
        <h2>Enter values:</h2>
      </div>
      <div className="form" id="form">
        <div className="f-group">
          <div className="inner">
            <h5>Chart title</h5>
            <input type="text" id="" />
          </div>
          <div className="inner">
            <h5>Add variables</h5>
            <i className="fa-solid fa-plus" onClick={handleAdd}></i>
          </div>
        </div>
        <div className="f-group">
          <div className="inner">
            <h5>Variable Name</h5>
            <input type="text" id="" />
          </div>
          <div className="inner">
            <h5>Variable Value</h5>
            <input type="text" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
