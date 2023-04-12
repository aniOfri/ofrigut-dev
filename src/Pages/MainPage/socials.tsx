/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Socials(){

    const styleSocials = css`
        margin-bottom: 5px;
        a{
            margin-left: 5px;
            margin-right: 5px;
        }
    `
    return (
        <div id="socials" css={styleSocials}>
            <a href="mailto:ofri.gutman@outlook.co.il"><EmailIcon/></a>
            <a href="https://github.com/aniOfri" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
        </div>
    )
}