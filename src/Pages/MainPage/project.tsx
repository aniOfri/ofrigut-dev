/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Project(props: any) {
    const hrefLink = props.hrefLink;
    const name = props.name;
    const information = props.information;
    const lang = props.lang;
    const date = props.date;
    return (
        <div className="Project" >
            <div className="ProjectWrapper">
                <h3 className="projectTitle"> {name}</h3>
                <div className="projectContent">
                    <div className="projectSubtitle">
                        <h3>ℹ️ {information}</h3>
                        <div className="projectInfo">
                            <h3>🙊 {lang}</h3>
                            <h3>🗓️ {date}</h3>
                        </div>
                    </div>
                    <div className="Play">
                        <a href={hrefLink}>
                            <Button className="Button" variant="contained" size="small">Live Demo</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default function Projects() {
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

    const widthCss = windowSize.innerWidth > 1000 ? "35%" : "90%";
    const projectsStyle = css`
    margin-top: 5vh;
    margin-bottom: 5vh;

    .Project{
        display: block;
        margin: auto;

        .ProjectWrapper{
            width: ${widthCss};
            margin: auto;
            text-align: left;
            
            .projectTitle{
                font-size: 3vh;
                margin-left: 10px;
                margin-bottom: 2px;
                
            }
            
            .projectContent{
                display: flex;

                h3 {
                    width: 30vmax;
                    font-size: 2vh;
                    font-weight: lighter;
                }
                
                .Play{
                    margin-left: auto;
                    margin-top: auto;
                    margin-bottom: auto;

                    .Button{
                        background-color: grey
                    }
                }
            }
        }
    }

    .lineBreak{
        width: 180px;
    }
`

    return (
        <div id="projects" css={projectsStyle} className="Projects">
            <h1 className="mainSubtitle">Projects 👨‍💻</h1>
            <Project hrefLink="/eartraining"
                name="👂 Interval Training"
                information="A tool which helps you train your musical intervals detection skills"
                lang="Hebrew"
                date="March-April of 23'"
            />
            <hr className="lineBreak" />
            <Project hrefLink="/settlements"
                name="🏘️ Settlements Game"
                information="A game about Israeli settlements' relative locations"
                lang="Hebrew"
                date="April-May of 22'"
            />
            <hr className="lineBreak" />
            <Project hrefLink="/countries"
                name="🌏 Countries Game"
                information="A game about countries' relative locations"
                lang="English"
                date="April-May of 22'"
            />
            <hr className="lineBreak" />
            <Project hrefLink="/dynrember"
                name="🧠 Dynrember"
                information="A dynamic tool which helps you remember"
                lang="Hebrew"
                date="January-March of 23'"
            />
        </div>
    )
}