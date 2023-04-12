/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import AboutMe from "./MainPage/aboutme"
import Projects from "./MainPage/project";
import Socials from "./MainPage/socials";

const styledApp = css`
    scroll-behavior: smooth;
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-size: 48px 84px;
    background-position: 0 0, 0 0, 24px 42px, 24px 42px, 0 0, 24px 42px;
    font-family: 'Roboto', sans-serif;

    .mainSubtitle{
        margin: auto;
        font-size: 4vh;
      }
    
    h1{
      color: #212121;
      width: fit-content
    }
    
    .mainNavbar {
      position:fixed;
      display: flex;
      background-color: #f8f8f8bc;
      width: 100%;
      height: 3vh;
      
      h1 {
        font-size: 1.5vh;
      }
      
      .mainTitle{
        margin: auto auto auto 10px;
      }
    }
`;

export default function MainPage() {
  useEffect(() => {
    document.title = "ofrigut.dev | main page";
    document.body.style.overflow = "auto";
  });



  return (
    <div css={styledApp} className="MainPage">
      <div className="mainNavbar">
        <h1 className="mainTitle">OfriGut.dev</h1>
      </div>
      <AboutMe />
      <hr />
      <Projects />
      <hr />
      <Socials />
    </div>
  );
}
