import { useState } from "react";
import { useParams } from "react-router-dom";

const Input = () => {
  const { type } = useParams();
  const [label, setLabel] = useState("");
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    const vars = document.getElementById("vars");
    const fgroup = document.createElement("div");
    const inner1 = document.createElement("div");
    const inner2 = document.createElement("div");
    const inner1_h5 = document.createElement("h5");
    const inner1_inp = document.createElement("input");
    const inner2_h5 = document.createElement("h5");
    const inner2_inp = document.createElement("input");

    vars.appendChild(fgroup);
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

  const handleValidate = () => {
    const cname = document.getElementById("cname");
    const vnames = document.querySelectorAll("#vname");
    const vvalues = document.querySelectorAll("#vvalue");
    const a_vnames = Array.from(vnames);
    const a_vvalues = Array.from(vvalues);
    // console.log(a_vnames[0].value);
    // console.log(a_vvalues[0].value);

    setLabel(cname);

    a_vnames.forEach((name) => {
      setLabels([...labels, name.value]);
    });

    a_vvalues.forEach((value) => {
      setData([...data, value.value]);
    });

    // console.log(label)
    // console.log(labels);
    // console.log(data);
  };

  return (
    <div className="inp-cont">
      <div className="head">
        <h2>Enter values:</h2>
      </div>
      <div className="form" id="form">
        <div className="vars" id="vars">
          <div className="f-group">
            <div className="inner">
              <h5>Chart title</h5>
              <input type="text" id="cname" />
            </div>
            <div className="inner">
              <h5>Add variable</h5>
              <i className="fa-solid fa-plus" onClick={handleAdd}></i>
            </div>
          </div>
          <div className="f-group">
            <div className="inner">
              <h5>Variable Name</h5>
              <input type="text" id="vname" />
            </div>
            <div className="inner">
              <h5>Variable Value</h5>
              <input type="text" id="vvalue" />
            </div>
          </div>
          <div className="f-group">
            <div className="inner">
              <h5>Variable Name</h5>
              <input type="text" id="vname" />
            </div>
            <div className="inner">
              <h5>Variable Value</h5>
              <input type="text" id="vvalue" />
            </div>
          </div>
          <div className="f-group">
            <div className="inner">
              <h5>Variable Name</h5>
              <input type="text" id="vname" />
            </div>
            <div className="inner">
              <h5>Variable Value</h5>
              <input type="text" id="vvalue" />
            </div>
          </div>
        </div>

        <button onClick={handleValidate}>Done</button>
      </div>
    </div>
  );
};

export default Input;
