/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Logos
import PythonLogo from '../../Assets/python-logo.png';
import JSLogo from '../../Assets/JavaScript-logo.png';
import TSLogo from '../../Assets/TypeScript-logo.png';
import ReactLogo from '../../Assets/React-logo.png';
import NodeJsLogo from '../../Assets/NodeJs-logo.png';
import CSharpLogo from '../../Assets/csharp-logo.svg';
import CLogo from '../../Assets/C-Logo.png';
import UnityLogo from '../../Assets/unity-logo.png';
import ArduinoLogo from '../../Assets/arduino-logo.png';
import LinuxLogo from '../../Assets/linux-logo.png';
import GitLogo from '../../Assets/git-logo.png';
import HTMLLogo from '../../Assets/html-logo.svg';
import CSSLogo from '../../Assets/css-logo.png';
import PSLogo from '../../Assets/PS-Logo.png';
import PRLogo from '../../Assets/PR-Logo.png';
import AELogo from '../../Assets/AE-logo.png';
import PowerPointLogo from '../../Assets/powerpoint-logo.png';
import ExcelLogo from '../../Assets/excel-logo.png';
import WordLogo from '../../Assets/word-logo.png';
import SQLLogo from '../../Assets/sql-logo.png';


const aboutMeStyle = css`
    margin: auto;
    height: fit-content;
    width: fit-content;
    margin-top: 6vh;
    margin-bottom: 3vh;
      
    p{
      width: 100%;
      margin:auto;
      padding: 5px 10px 5px 10px;
    }

    .aboutMeImgs{
        margin-top: 2vh;
        display: inline-block;
        img{
            margin-left: 0.5vw;
            margin-right: 0.5vw;
            height: 2.5vh;
        }
    }
`

export default function AboutMe(){
    return (
        <div id="aboutme" css={aboutMeStyle} className="aboutMe">
        <h1 className="mainSubtitle">About me 👋😄</h1>
        <p>
          Hi. I'm Ofri Gutman. <br/>
          A passionate, self-taught <br/> 
          Full-Stack and software developer, Designer, <br/>  Music lover and a Rubik's cube enthusiast,<br/>  based in The Haifa Area, Israel. 📍
        </p>
        <div className="aboutMeImgs">
          <img alt="" title="Python" src={PythonLogo} />
          <img alt="" title="HTML5" src={HTMLLogo} />
          <img alt="" title="CSS" src={CSSLogo} />
          <img alt="" title="JavaScript" src={JSLogo} />
          <img alt="" title="TyepScript" src={TSLogo} />
          <img alt="" title="React" src={ReactLogo} />
          <img alt="" title="Node JS" src={NodeJsLogo} />
          <img alt="" title="C#" src={CSharpLogo} />
          <img alt="" title="C" src={CLogo} /> <br/>
          <img alt="" title="Unity" src={UnityLogo} />
          <img alt="" title="Arduino" src={ArduinoLogo} />
          <img alt="" title="Linux" src={LinuxLogo} />
          <img alt="" title="Git" src={GitLogo} />
          <img alt="" title="SQL" src={SQLLogo} />
          <img alt="" title="PowerPoint" src={PowerPointLogo} />
          <img alt="" title="Excel" src={ExcelLogo} />
          <img alt="" title="Word" src={WordLogo} />
          <img alt="" title="Photoshop" src={PSLogo} />
          <img alt="" title="Premiere Pro" src={PRLogo} />
          <img alt="" title="After Effects" src={AELogo} />
        </div>
      </div>
    )
}