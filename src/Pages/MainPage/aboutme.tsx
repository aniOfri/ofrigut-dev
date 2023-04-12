/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// Logos
import PythonLogo from '../../Assets/python-logo.png';
import JSLogo from '../../Assets/JavaScript-logo.png';
import ReactLogo from '../../Assets/React-logo.png';
import NodeJsLogo from '../../Assets/NodeJs-logo.png';
import CSharpLogo from '../../Assets/csharp-logo.svg';
import ArduinoLogo from '../../Assets/arduino-logo.png';
import LinuxLogo from '../../Assets/linux-logo.png';
import HTMLLogo from '../../Assets/html-logo.svg';
import CSSLogo from '../../Assets/css-logo.png';

const aboutMeStyle = css`
    margin: auto;
    height: fit-content;
    width: fit-content;
    margin-top: 5vh;
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
            margin-left: 5px;
            margin-right: 5px;
            height: 3vh;
        }
    }
`

export default function AboutMe(){
    return (
        <div id="aboutme" css={aboutMeStyle} className="aboutMe">
        <h1 className="mainSubtitle">🔹 About me 🔹</h1>
        <p>
          Hi. I'm Ofri Gutman. 👋😄
          A passionate, self-taught full-stack and software developer, designer, based in Israel. 📍
        </p>
        <div className="aboutMeImgs">
          <img src={PythonLogo} />
          <img src={HTMLLogo} />
          <img src={CSSLogo} />
          <img src={JSLogo} />
          <img src={ReactLogo} />
          <img src={NodeJsLogo} />
          <img src={CSharpLogo} />
          <img src={ArduinoLogo} />
          <img src={LinuxLogo} />
        </div>
      </div>
    )
}