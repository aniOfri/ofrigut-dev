/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import AboutMe from "./MainPage/aboutme"
import Projects from "./MainPage/project";
import Socials from "./MainPage/socials";

const styledApp = css`
    font-family: 'Varela Round', sans-serif;
    scroll-behavior: smooth;
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #E7E7E7;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .mainSubtitle{
        margin: auto;
        font-size: 4vh;
      }
    
    h1{
      color: #010413;
      width: fit-content
    }

    .content{
      flex: 1
    }
    
    .mainNavbar {
      position:fixed;
      z-index: 1
      ;
      display: flex;
      background-color: #e7e7e76a;
      width: 100%;
      height: 3vh;
      
      h1 {
        font-size: 1.5vh;
      }
      
      .mainTitle{
        margin: auto auto auto 10px;
      }

      .navigation{
        display: inline-flex;
        margin: auto 10px auto auto;

        .page{
          margin-left : 5px;
          margin-right : 5px;
        }
      }
    }
`;

export default function MainPage(props: any) {
  const page = props.page;

  useEffect(() => {
    switch(page){
      default:
        break;
      case "0":
        document.title = "ofrigut.dev | about me";
        break;
      case "1":
        document.title = "ofrigut.dev | projects";
        break;
    }

    document.body.style.overflow = "auto";
  });

  let content;
  switch(page){
    default:
      break;
    case "0":
      content = <AboutMe/>
      break;
    case "1":
      content = <Projects/>
      break;
  }

  return (
    <div css={styledApp} className="MainPage">
      <div className="mainNavbar">
        <h1 className="mainTitle">OfriGut.dev</h1>
        <div className="navigation">
          <a href="/"><h1 className="page">About Me</h1></a>
          <a href="/projects"><h1 className="page">Projects</h1></a>
        </div>
      </div>
      <div className="content">
        {content}
      </div>
      <footer>
        <Socials />
      </footer>
    </div>
  );
}
