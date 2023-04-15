/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from 'react';

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
import FireBaseLogo from '../../Assets/firebase-logo.png';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function AboutMe() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
      function handleWindowResize() {
          setWindowSize(getWindowSize());
      }

      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
  }, []);

  const widthCss = windowSize.innerWidth > 1000 ? "80%" : "90%";
  const fontSizeCss = windowSize.innerWidth > 1000 ? "2vw" : "4vw";
  const mainFontSizeCss = windowSize.innerWidth > 1000 ? "3vw" : "6vw";

    const aboutMeStyle = css`
    width: 100%;
    margin: 0;
    top: 22%;
    left: 50%;
    position: absolute;
    transform: translateY(-50%);
    transform: translateX(-50%);

    .mainSubtitle{
      font-size: ${mainFontSizeCss};
    }

    p{
      font-size: ${fontSizeCss};
      width: ${widthCss};
      margin: auto;
      white-space: pre-wrap;
    }

    .aboutMeImgs{
        margin-top: 10vh;
        display: inline-block;

        h5{
          font-weight: normal;
          margin-bottom: 10px;
        }
        img{
            margin-left: 0.5vw;
            margin-right: 0.5vw;
            height: 3vh;
        }
    }
    `

  return (
    <div id="aboutme" css={aboutMeStyle} className="aboutMe">
      <h1 className="mainSubtitle">About me 👋😄</h1>
      <p>
        Hey there! I'm Ofri Gutman. <br />
        A passionate, self-taught Full-Stack and software developer, Designer, <br/>
        Music lover as a listener and a piano player while also a puzzle enthusiast <br/>
        such as Rubik's cubes and Burr puzzles. based in The Haifa Area, Israel. <br/>
        Let's collaborate and make innovative projects come to fruition!
      </p>

      <div className="aboutMeImgs">
        <h5>Here are some of the technologies I am familiar with:</h5>
        <img alt="" title="Python" src={PythonLogo} />
        <img alt="" title="HTML5" src={HTMLLogo} />
        <img alt="" title="CSS" src={CSSLogo} />
        <img alt="" title="JavaScript" src={JSLogo} />
        <img alt="" title="TypeScript" src={TSLogo} />
        <img alt="" title="React" src={ReactLogo} />
        <img alt="" title="Node JS" src={NodeJsLogo} />
        <img alt="" title="C#" src={CSharpLogo} />
        <img alt="" title="C" src={CLogo} />
        <img alt="" title="Arduino" src={ArduinoLogo} /><br />
        <img alt="" title="Unity" src={UnityLogo} />
        <img alt="" title="Linux" src={LinuxLogo} />
        <img alt="" title="Git" src={GitLogo} />
        <img alt="" title="Firebase" src={FireBaseLogo} /> 
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