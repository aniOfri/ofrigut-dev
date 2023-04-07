import "../CSS/MainPage/MainPage.css";
import HearingIcon from '@mui/icons-material/Hearing';
import { useEffect } from "react";

export default function MainPage() {
  useEffect(() =>{
    document.title = "ofrigut.dev | main page"
  });
  return (
        <div className="App">
          <h1>welcome to ofrigut.dev</h1>
          <div className="Services">
            <a href="/eartraining">
              <div className="Service" id="EarTrainer">
                <h3>Hebrew Interval Training</h3>
                <HearingIcon/>
              </div>
            </a>
          </div>
        </div>
      );
}
