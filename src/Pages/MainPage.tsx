import "../CSS/MainPage/MainPage.css";
import HearingIcon from '@mui/icons-material/Hearing';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import { useEffect } from "react";

export default function MainPage() {

  useEffect(() =>{
    document.title = "ofrigut.dev | main page"
  });

  return (
        <div className="App">
          <h1 className="mainTitle">welcome to ofrigut.dev</h1>
          <h2 className="mainSubtitle">my projects:</h2>
          <div className="Services">
            <a className="Service" href="/eartraining">
              <div id="EarTrainer">
                <h3 className="serviceTitle">Interval Training</h3>
                <h3 className="serviceSubtitle">(Hebrew)</h3>
                <h3 className="serviceSubtitle">March-April of 23'</h3>
                <HearingIcon/>
              </div>
            </a>
            <a className="Service" href="/settlements">
              <div  id="Settlements">
                <h3 className="serviceTitle">Settlements Game</h3>
                <h3 className="serviceSubtitle">(Hebrew)</h3>
                <h3 className="serviceSubtitle">April-May of 22'</h3>
                <HomeIcon/>
              </div>
            </a>
            <a className="Service" href="/countries">
              <div  id="Countries">
                <h3 className="serviceTitle">Countries Game</h3>
                <h3 className="serviceSubtitle">(English)</h3>
                <h3 className="serviceSubtitle">April-May of 22'</h3>
                <PublicIcon/>
              </div>
            </a>
          </div>
        </div>
      );
}
