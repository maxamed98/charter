import { useNavigate } from "react-router-dom";
import line from "../images/line.png";
import bar from "../images/bar.png";
import pie from "../images/pie.png";

const Home = () => {
  const nav = useNavigate();

  return (
    <div className="main">
      <h1>Select chart type:</h1>
      <div className="body">
        <div
          className="type"
          onClick={() => {
            nav("input/bar");
          }}
        >
          <img src={bar} alt="" />
          <h4>Bar</h4>
        </div>
        <div
          className="type"
          onClick={() => {
            nav("input/line");
          }}
        >
          <img src={line} alt="" />
          <h4>Line</h4>
        </div>
        <div
          className="type"
          onClick={() => {
            nav("input/pie");
          }}
        >
          <img src={pie} alt="" />
          <h4>Pie</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
