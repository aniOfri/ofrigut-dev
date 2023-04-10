import "../CSS/MainPage/MainPage.css";
import HearingIcon from '@mui/icons-material/Hearing';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useEffect, useState } from "react";
import CSS from 'csstype';

export default function MainPage() {

    // Mobile related States
    const [widthSize, setWidth] = useState(window.innerWidth as number);
    const [heightSize, setHeight] = useState(window.innerHeight as number);
  
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
  useEffect(() =>{
    document.title = "ofrigut.dev | main page"

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const isMobile = widthSize <= 1000;
  const serviceSize: CSS.Properties = {
    width: isMobile ? "fit-content" : "50%",
    transform: isMobile ? "scale(0.95)" : "scale(1)"
  };

  return (
        <div className="MainPage">
          <h1 className="mainTitle">welcome to ofrigut.dev</h1>
          <h2 className="mainSubtitle">my projects:</h2>
          <div className="Services" style={serviceSize}>
            <a className="Service"  href="/eartraining">
              <div className="ServiceWrapper" id="EarTrainer">
                <h3 className="serviceTitle">Interval Training</h3>
                <div className="serviceSubtitle">
                  <h3>A tool which helps you train your musical intervals detection skills</h3>
                  <div className="serviceInfo">
                    <h3>(Hebrew)</h3>
                    <h3>March-April of 23'</h3>
                  </div>
                </div>
                <HearingIcon/>
              </div>
            </a>
            <a className="Service" href="/settlements">
              <div className="ServiceWrapper" id="Settlements">
                <h3 className="serviceTitle">Settlements Game</h3>
                <div className="serviceSubtitle">
                  <h3>A game about Israeli settlements' relative locations</h3>
                  <div className="serviceInfo">
                    <h3>(Hebrew)</h3>
                    <h3>April-May of 22'</h3>
                  </div>
                </div>
                <HomeIcon/>
              </div>
            </a>
            <a className="Service" href="/countries">
              <div className="ServiceWrapper" id="Countries">
                <h3 className="serviceTitle">Countries Game</h3>
                <div className="serviceSubtitle">
                  <h3>A game about countries' relative locations</h3>
                  <div className="serviceInfo">
                    <h3>(English)</h3>
                    <h3>April-May of 22'</h3>
                  </div>
                </div>
                <PublicIcon/>
              </div>
            </a>
            <a className="Service" href="/dynrember">
              <div className="ServiceWrapper" id="Dynrember">
                <h3 className="serviceTitle">Dynrember</h3>
                <div className="serviceSubtitle">
                  <h3>A dynamic tool which helps you remember</h3>
                  <div className="serviceInfo">
                    <h3>(Hebrew)</h3>
                    <h3>January-March of 23'</h3>
                  </div>
                </div>
                <PsychologyIcon/>
              </div>
            </a>
          </div>
        </div>
      );
}
