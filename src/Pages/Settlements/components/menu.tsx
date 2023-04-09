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
        document.cookie = "MinPopSettlements=" + props.minPop;
    }

    function handleTimer(e: any) {
        props.setTimerEnabled(e);
        document.cookie = "ScoreSettlements=0";
        document.cookie = "TimerSettlements=" + props.timerEnabled;
    }

    function handleInfo(e: any) {
        props.setShowInfo(e);
        document.cookie = "ShowInfoSettlements=" + props.showInfo;
    }

    function handleHealth(e: any) {
        props.setIsHealth(e);
        document.cookie = "HealthSettlements=" + props.isHealth;
    }

    return (
        <div>
            <img alt="" src={closeLogo} className="closeImage" onClick={() => { props.setSettings(!props.settings) }}></img>
            <h1>הגדרות</h1>
            <div className="setting">
                <div>
                    <p className="settingTitle">אוכלוסיה מינימלית</p>
                    <p className="smallText">קביעת האוכלוסיה המינימלית של כל עיר במשחק</p>
                </div>
                <div style={{width: "40%"}} >
                    <Slider className="controller" value={props.minPop} min={0} max={50000} step={1000} valueLabelDisplay="auto" onChange={handleMinPop} />
                </div>
            </div>
            <div className="setting">
                <div>
                    <p className="settingTitle">טיימר</p>
                    <p className="smallText">שחק את המשחק על זמן ובדוק כמה אתה מהיר</p>
                    <p className="smallText">(בשימוש בטיימר הניקוד לא ישמר וכל ניקוד שמור יתאפס)</p>
                </div>
                <Switch className="controller" onColor="#86d3ff" onHandleColor="#2693e6" uncheckedIcon={false} checkedIcon={false} checked={props.timerEnabled} onChange={handleTimer} />
            </div>
            <div className="setting">
                <div>
                    <p className="settingTitle">מידע בדף ביניים</p>
                    <p className="smallText">הצג מידע נוסף על העיר בדף הביניים</p>
                </div>
                <Switch className="controller" onColor="#86d3ff" onHandleColor="#2693e6" uncheckedIcon={false} checkedIcon={false} checked={props.showInfo} onChange={handleInfo} />
            </div>
            <div className="setting">
                <div>
                    <p className="settingTitle">פסילות</p>
                    <p className="smallText">קבל 3 פסילות</p>
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
        document.cookie = "MinPopSettlements=" + props.minPop;
        document.cookie = "TimerSettlements=" + props.timerEnabled;
        document.cookie = "ShowInfoSettlements=" + props.showInfo;
        document.cookie = "HealthSettlements=" + props.isHealth;

        return <Settings isHealth={props.isHealth} setIsHealth={props.setIsHealth} setShowInfo={props.setShowInfo} showInfo={props.showInfo} setMinPop={props.setMinPop} minPop={props.minPop} setTimerEnabled={props.setTimerEnabled} timerEnabled={props.timerEnabled} setSettings={setSettings} settings={settings} />
    }
    else {
        let mode = "משחק לבד";
        if (props.cookies["streakSettlements"] > 0)
            mode = "המשך משחק לבד (ניקוד: " + props.cookies["streakSettlements"] + ")";

            return (
                <div>
                    <img alt="" src={settingsLogo} className="settingsImage" onClick={() => { setSettings(!settings) }}></img>
                    <h1 className="menuTitle">איזה יישוב יותר קרוב?</h1><br></br>
                    <div className="h1button" ><h1  onClick={() => { props.startGame() }}> {mode}</h1></div><br></br>
                </div>
            );

    }
}

export default Menu;