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


const aboutMeStyle = css`
    margin: auto;
    height: fit-content;
    width: fit-content;
    margin-top: 10vh;
    margin-bottom: 3vh;
      
    p{
    width: 60%;
    margin:auto;
    padding: 5px 10px 5px 10px;
    }

    .aboutMeImgs{
        margin-top: 2vh;
        display: inline-flex;
        img{
            justify-content: flex-start;
            height: 2.5vh;
        }
    }
`

export default function AboutMe(){
    return (
        <div id="aboutme" css={aboutMeStyle} className="aboutMe">
        <h1 className="mainSubtitle">About me 👋😄</h1>
        <p>
          Hi. I'm Ofri Gutman. 
          A passionate, self-taught Full-Stack and software developer, Designer,  Music lover and a Rubik's cube enthusiast, based in Israel. 📍
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
          <img alt="" title="C" src={CLogo} />
          <img alt="" title="Unity" src={UnityLogo} />
          <img alt="" title="Arduino" src={ArduinoLogo} />
          <img alt="" title="Linux" src={LinuxLogo} />
          <img alt="" title="Git" src={GitLogo} />
          <img alt="" title="Photoshop" src={PSLogo} />
          <img alt="" title="Premiere Pro" src={PRLogo} />
        </div>
      </div>
    )
}