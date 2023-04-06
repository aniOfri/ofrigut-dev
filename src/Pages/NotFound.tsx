import { Link } from "react-router-dom";
import "../CSS/NotFound/NotFound.css";

export default function NotFound() {
  return (
    <div className="wrapper">
      <h1 className="title">NOTHING HERE!!!</h1>
      <h1 className="link">
        <Link to="/">Home</Link>
      </h1>
      <h1 className="link">
        <Link to="/EarTraining">Hebrew Ear Trainer</Link>
      </h1>
    </div>
  );
}
