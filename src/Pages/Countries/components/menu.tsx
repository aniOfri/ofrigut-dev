// Components
import Slider from '@mui/material/Slider';
import Switch from "react-switch";

// Data
import settingsLogo from '../data/settings.png';
import closeLogo from '../data/x.png';

// Modules
import { useState } from 'react'

function Settings(props: any) {
    function handleMinPop(e: any) {
        props.setMinPop(e.target.value);
        document.cookie = "MinPopCountries=" + props.minPop;
    }

    function handleTimer(e: any) {
        props.setTimerEnabled(e);
        document.cookie = "ScoreCountries=0";
        document.cookie = "TimerCountries=" + props.timerEnabled;
    }

    function handleInfo(e: any) {
        props.setShowInfo(e);
        document.cookie = "ShowInfoCountries=" + props.showInfo;
    }

    function handleHealth(e: any) {
        props.setIsHealth(e);
        document.cookie = "HealthCountries=" + props.isHealth;
    }

    return (
        <div>
            <img alt="" src={closeLogo} className="closeImage" onClick={() => { props.setSettings(!props.settings) }}></img>
            <h1>Settings</h1>
            <div className="setting">
                <div>
                    <p className="settingTitle">Minimum Population</p>
                    <p className="smallText">Set the minimum population for each country in the game</p>
                </div>
                <div style={{width: "40%"}} >
                    <Slider className="controller" value={props.minPop} min={0} max={50000} step={1000} valueLabelDisplay="auto" onChange={handleMinPop} />
                </div>
            </div>
            <div className="setting">
                <div>
                    <p className="settingTitle">Timer</p>
                    <p className="smallText">Play the game with a limit of 10 seconds for each level</p>
                </div>
                <Switch className="controller" onColor="#86d3ff" onHandleColor="#2693e6" uncheckedIcon={false} checkedIcon={false} checked={props.timerEnabled} onChange={handleTimer} />
            </div>
            <div className="setting">
                <div>
                    <p className="settingTitle">Information</p>
                    <p className="smallText">Show information between each level</p>
                </div>
                <Switch className="controller" onColor="#86d3ff" onHandleColor="#2693e6" uncheckedIcon={false} checkedIcon={false} checked={props.showInfo} onChange={handleInfo} />
            </div>
            <div className="setting">
                <div>
                    <p className="settingTitle">Fails</p>
                    <p className="smallText">Get 3 Fails</p>
                </div>
                <Switch className="controller" onColor="#86d3ff" onHandleColor="#2693e6" uncheckedIcon={false} checkedIcon={false} checked={props.isHealth} onChange={handleHealth} />
            </div>
            <div className="footer">
                <p dir="ltr" >© 2022 Ofri Gutman</p>
            </div>
        </div>
    )
}

function Menu(props: any) {
    const [settings, setSettings] = useState(false);

    if (settings) {
        document.cookie = "MinPopCountries=" + props.minPop;
        document.cookie = "TimerCountries=" + props.timerEnabled;
        document.cookie = "ShowInfoCountries=" + props.showInfo;
        document.cookie = "HealthCountries=" + props.isHealth;

        return <Settings isHealth={props.isHealth} setIsHealth={props.setIsHealth} setShowInfo={props.setShowInfo} showInfo={props.showInfo} setMinPop={props.setMinPop} minPop={props.minPop} setTimerEnabled={props.setTimerEnabled} timerEnabled={props.timerEnabled} setSettings={setSettings} settings={settings} />
    }
    else {
        let mode = "Start Playing";
        if (props.cookies["streakCountries"] > 0)
            mode = "Continue Playing (" + props.cookies["streakCountries"] + ")";

        return (
            <div>
                <img alt="" src={settingsLogo} className="settingsImage" onClick={() => { setSettings(!settings) }}></img>
                <h1 className="menuTitle">Which Country is Nearest?</h1><br></br>
                <div className="h1button" ><h1  onClick={() => { props.startGame() }}> {mode}</h1></div><br></br>
            </div>
        );

    }
}

export default Menu;