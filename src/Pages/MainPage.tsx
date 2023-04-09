import "../CSS/MainPage/MainPage.css";
import HearingIcon from '@mui/icons-material/Hearing';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useEffect } from "react";

export default function MainPage() {

  useEffect(() =>{
    document.title = "ofrigut.dev | main page"
  });

  return (
        <div className="MainPage">
          <h1 className="mainTitle">welcome to ofrigut.dev</h1>
          <h2 className="mainSubtitle">my projects:</h2>
          <div className="Services">
            <a className="Service" href="/eartraining">
              <div className="ServiceWrapper" id="EarTrainer">
                <h3 className="serviceTitle">Interval Training</h3>
                <div className="serviceSubtitle">
                  <h3>(Hebrew)</h3>
                  <h3>March-April of 23'</h3>
                </div>
                <HearingIcon/>
              </div>
            </a>
            <a className="Service" href="/settlements">
              <div className="ServiceWrapper" id="Settlements">
                <h3 className="serviceTitle">Settlements Game</h3>
                <div className="serviceSubtitle">
                  <h3>(Hebrew)</h3>
                  <h3>April-May of 22'</h3>
                </div>
                <HomeIcon/>
              </div>
            </a>
            <a className="Service" href="/countries">
              <div className="ServiceWrapper" id="Countries">
                <h3 className="serviceTitle">Countries Game</h3>
                <div className="serviceSubtitle">
                  <h3>(English)</h3>
                  <h3>April-May of 22'</h3>
                </div>
                <PublicIcon/>
              </div>
            </a>
            <a className="Service" href="/dynrember">
              <div className="ServiceWrapper" id="Dynrember">
                <h3 className="serviceTitle">Dynrember</h3>
                <div className="serviceSubtitle">
                  <h3>(Hebrew)</h3>
                  <h3>January-March of 23'</h3>
                </div>
                <PsychologyIcon/>
              </div>
            </a>
          </div>
        </div>
      );
}
