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
            nav("input");
          }}
        >
          Bar Chart
        </div>
        <div
          className="type"
          onClick={() => {
            nav("input");
          }}
        >
          Line Chart
        </div>
        <div
          className="type"
          onClick={() => {
            nav("input");
          }}
        >
          Pie Chart
        </div>
      </div>
    </div>
  );
};

export default Home;
