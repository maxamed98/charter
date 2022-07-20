import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  bar_setLabel,
  bar_setLabels,
  bar_setData,
  bar_clearAll,
} from "../redux/bar";
import {
  line_setLabel,
  line_setLabels,
  line_setData,
  line_clearAll,
} from "../redux/line";
import {
  pie_setLabel,
  pie_setLabels,
  pie_setData,
  pie_clearAll,
} from "../redux/pie";

const Input = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const nav = useNavigate();
  const [localLabel, setLocalLabel] = useState("");
  // const [labels, setLabels] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(bar_clearAll());
    dispatch(line_clearAll());
    dispatch(pie_clearAll());
  }, []);

  const handleAdd = () => {
    const vars = document.getElementById("vars");
    const fgroup = document.createElement("div");
    const inner1 = document.createElement("div");
    const inner2 = document.createElement("div");
    const inner1_h5 = document.createElement("h5");
    const inner1_inp = document.createElement("input");
    const inner2_h5 = document.createElement("h5");
    const inner2_inp = document.createElement("input");

    fgroup.setAttribute("class", "f-group");
    inner1.setAttribute("class", "inner");
    inner2.setAttribute("class", "inner");
    inner1_h5.textContent = "Variable Name";
    inner2_h5.textContent = "Variable Value";
    inner1_inp.setAttribute("id", "vname");
    inner2_inp.setAttribute("id", "vvalue");
    inner1_inp.setAttribute("autocomplete", "off");
    inner2_inp.setAttribute("autocomplete", "off");

    inner1.appendChild(inner1_h5);
    inner1.appendChild(inner1_inp);
    inner2.appendChild(inner2_h5);
    inner2.appendChild(inner2_inp);

    fgroup.appendChild(inner1);
    fgroup.appendChild(inner2);

    vars.appendChild(fgroup);
  };

  const handleValidate = () => {
    const cname = document.querySelector("#cname");
    const vnames = document.querySelectorAll("#vname");
    const vvalues = document.querySelectorAll("#vvalue");
    const a_vnames = Array.from(vnames);
    const a_vvalues = Array.from(vvalues);
    // console.log(a_vnames[0].value);
    // console.log(a_vvalues[0].value);

    // setLabel(cname);

    var avvalues;
    var avnames;

    if (type == "bar") {
      // dispatch(bar_clearAll);

      a_vnames.forEach((name) => {
        dispatch(bar_setLabels(name.value));
      });

      a_vvalues.forEach((value) => {
        dispatch(bar_setData(value.value));
      });

      dispatch(bar_setLabel(localLabel));
    }

    if (type == "line") {
      // dispatch(line_clearAll);

      a_vnames.forEach((name) => {
        dispatch(line_setLabels(name.value));
      });

      a_vvalues.forEach((value) => {
        dispatch(line_setData(value.value));
      });

      dispatch(line_setLabel(localLabel));
    }

    if (type == "pie") {
      // dispatch(pie_clearAll);

      a_vnames.forEach((name) => {
        dispatch(pie_setLabels(name.value));
      });

      a_vvalues.forEach((value) => {
        dispatch(pie_setData(value.value));
      });

      dispatch(pie_setLabel(localLabel));
    }

    // console.log("cname");
    // console.log(cname.value);
    // console.log(localLabel);
    // console.log("a_vnames");
    // console.log(a_vnames);
    // console.log("a_vvalues");
    // console.log(a_vvalues);

    // dispatch(setLabel(cname));
    // dispatch(setLabels(a_vnames));
    // dispatch(setLabel(a_vvalues));

    nav(`/${type}`);

    // console.log(label)
    // console.log(labels);
    // console.log(data);
  };

  return (
    <div className="inp-cont">
      {/* <div className="head">
        <h2>Enter values:</h2>
      </div> */}
      <div className="form" id="form">
        <div className="vars" id="vars">
          <div className="f-group">
            <div className="inner">
              <h5>Chart title</h5>
              <input
                type="text"
                id="cname"
                value={localLabel}
                onChange={(e) => setLocalLabel(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="inner">
              <h5>Add variable</h5>
              <i className="fa-solid fa-plus" onClick={handleAdd}></i>
            </div>
          </div>
          <div className="f-group">
            <div className="inner">
              <h5>Variable Name</h5>
              <input type="text" id="vname" autoComplete="off" />
            </div>
            <div className="inner">
              <h5>Variable Value</h5>
              <input type="text" id="vvalue" autoComplete="off" />
            </div>
          </div>
          <div className="f-group">
            <div className="inner">
              <h5>Variable Name</h5>
              <input type="text" id="vname" autoComplete="off" />
            </div>
            <div className="inner">
              <h5>Variable Value</h5>
              <input type="text" id="vvalue" autoComplete="off" />
            </div>
          </div>
          <div className="f-group">
            <div className="inner">
              <h5>Variable Name</h5>
              <input type="text" id="vname" autoComplete="off" />
            </div>
            <div className="inner">
              <h5>Variable Value</h5>
              <input type="text" id="vvalue" autoComplete="off" />
            </div>
          </div>
        </div>

        <button onClick={handleValidate}>Done</button>
      </div>
    </div>
  );
};

export default Input;
