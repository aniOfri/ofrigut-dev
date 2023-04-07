import { Link } from "react-router-dom";
import "../CSS/NotFound/NotFound.css";
import { useEffect } from "react";

export default function NotFound() {

  useEffect(() =>{
    document.title = "ofrigut.dev | 404"
  });
  return (
    <div className="wrapper">
      <h1 className="title">NOTHING HERE!!!</h1>
      <h1 className="link">
        <Link to="/">Home</Link>
      </h1>
    </div>
  );
}
