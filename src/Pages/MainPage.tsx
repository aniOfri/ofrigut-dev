import "../CSS/MainPage/MainPage.css";
import HearingIcon from '@mui/icons-material/Hearing';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from "react";

export default function MainPage() {

  useEffect(() =>{
    document.title = "ofrigut.dev | main page"
  });

  return (
        <div className="App">
          <h1 className="mainTitle">welcome to ofrigut.dev</h1>
          <div className="Services">
            <a href="/eartraining">
              <div className="Service" id="EarTrainer">
                <h3 className="serviceTitle">Hebrew Interval Training</h3>
                <HearingIcon/>
              </div>
            </a>
            <a href="/settlements">
              <div className="Service" id="Settlements">
                <h3 className="serviceTitle">Hebrew Settlments Game</h3>
                <HomeIcon/>
              </div>
            </a>
          </div>
        </div>
      );
}
