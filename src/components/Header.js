import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="header">
      <h3 onClick={() => nav("")}>
        Chart<span id="er">er</span>
      </h3>
    </div>
  );
};

export default Header;
