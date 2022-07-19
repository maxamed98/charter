import { useNavigate } from "react-router-dom";

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
          Bar Chart
        </div>
        <div
          className="type"
          onClick={() => {
            nav("input/line");
          }}
        >
          Line Chart
        </div>
        <div
          className="type"
          onClick={() => {
            nav("input/pie");
          }}
        >
          Pie Chart
        </div>
      </div>
    </div>
  );
};

export default Home;
