
// Data
import heart from '../data/heart.png';

// Modules
import { useState, useEffect } from 'react'
import { calcCrow, timerHTML } from '../modules/Calculators';
import { GetCountry } from '../modules/Countries'
import { useReward } from 'react-rewards';

function Game(props: any) {
    // Meta game related states
    const [streak, setStreak] = useState(parseInt(props.cookies["ScoreCountries"]));
    const [time, setTime] = useState(0);
    const [health, setHealth] = useState(props.isHealth ? 3 : 1);
        
    // Game related states
    const [pause, setPause] = useState(false);
    const [pairs, setPairs] = useState([]);
    const [lastSettlements, setLastSetts] = useState([null]);
    const [settlements, setSettlements] = useState(GetCountry([null], streak, lastSettlements, props.minPop, pairs) as any[]);
    const [choice, setChoice] = useState(0);
    const [correct, setCorrect] = useState(true);

    // Aesthetics related states
    let rewardConfigConfetti = {
        lifetime: 100,
        spread: 150,
        zIndex: -1,
        decay: 0.95,
    }
    let rewardConfigBalloons = {
        lifetime: 200,
        spread: 100,
        startVelocity: 5,
        elementCount: 50,
        zIndex: -1,
        decay: 0.999,
    }
    const { reward: rewardConfetti} = useReward('rewardId', 'confetti', rewardConfigConfetti);
    const { reward: rewardBalloons} = useReward('rewardId', 'balloons', rewardConfigBalloons);


    useEffect(() => {
        if (props.timerEnabled || props.isMultiplayer){
            let interval = null as any;

            if (props.isActive) {
                interval = setInterval(() => {
                    setTime((time) => time + 10);
                    if (time >= 9990){
                        props.setIsActive(false);
                        Choice(7);
                    }

                }, 10);
            } else {
                clearInterval(interval);
            }
            return () => {
                clearInterval(interval);
            };
        }
    }, [props.isActive, time]);

    function Choice(choice: number) {
        props.setIsActive(false);
        setChoice(choice);

        let reward = () => {rewardConfetti()};
        if ((streak+1) % 10 === 0){
            reward = () => {rewardBalloons()};
        }

        setCorrect(true)
        if (choice === 1 && settlements[1] === 1) {
            setStreak(streak + 1);
            reward();
        }
        else if (choice === 2 && settlements[1] === 2) {
            setStreak(streak + 1);
            reward();
        }
        else if (choice === 3 && settlements[1] === 3) {
            setStreak(streak + 1);
            reward();
        }
        else if (choice === 4 && settlements[1] === 4) {
            setStreak(streak + 1);
            reward();
        }
        else if (choice === 5 && settlements[1] === 5) {
            setStreak(streak + 1);
            reward();
        }
        else if (choice === 6 && settlements[1] === 6) {
            setStreak(streak + 1);
            reward();
        }
        else {
            setCorrect(false);
        }

        setPause(true);
    }

    function Sentence(orig: any, dest: any) {
        let longt1 = orig.gps.split(" ")[1].replace(")", "");
        let longt2 = dest.gps.split(" ")[1].replace(")", "");
        let vert = longt1 - longt2;

        let lat1 = orig.gps.split("(")[1].split(" ")[0];
        let lat2 = dest.gps.split("(")[1].split(" ")[0];
        let horz = lat1 - lat2;

        let slope = vert / horz;
        let keyword = "";

        if (longt2 > longt1) {
            if (slope > 0 && slope < 0.2)
                keyword = "West";
            else if (slope > 0.2 && slope < 5)
                keyword = "South West";
            else if (slope > 5 || slope < -5)
                keyword = "South";
            else if (slope > -5 && slope < -0.2)
                keyword = "South East";
            else if (slope > -0.2 && slope < 0)
                keyword = "East"
        }
        else {
            if (slope > 0 && slope < 0.2)
                keyword = "East";
            else if (slope > 0.2 && slope < 5)
                keyword = "North East";
            else if (slope > 5 || slope < -5)
                keyword = "North";
            else if (slope > -5 && slope < -0.2)
                keyword = "North West";
            else if (slope > -0.2 && slope < 0)
                keyword = "West"
        }

        return "Located approximately " + Math.round(calcCrow(lat1, longt1, lat2, longt2)) + " KM " + keyword + " from ";
    }

    function updateLastSettlements(lastPlay: any) {
        let lastSetts = lastSettlements;
        if (lastSetts[0] === null)
            lastSetts[0] = lastPlay;
        else
            lastSetts.push(lastPlay);

        if (lastSetts.length > 20)
            lastSetts.shift();

        setLastSetts(lastSetts);
    }

    function addToPairs() {
        let allpairs = pairs as any;
        allpairs.push([settlements[0][0], settlements[0][settlements[1]]]);
        setPairs(allpairs);
    }

    function nextRound() {
        setTime(0);
        props.setIsActive(true);
        addToPairs();
        setSettlements(GetCountry(settlements[0], streak, lastSettlements, props.minPop, pairs))
        setPause(false);
        updateLastSettlements(settlements[0][0]);
        if (!correct && health-1 === 0) {
            if (streak > parseInt(props.cookies["HighscoreCountries"])) {
                document.cookie = "HighscoreCountries=" + streak;
            }
            setPairs([]);
            props.setMenu(true);
            setStreak(0);
            document.cookie = "ScoreCountries=0";
            setCorrect(true);
        }
        else if (!correct)
            setHealth(health-1);
    }

    let jsx;
    document.cookie = "ScoreCountries=" + streak;
    if (pause) {
        let sentence = Sentence(settlements[0][0], settlements[0][settlements[1]]);

        let indicator = "fail", answer = "wrong answer !";
        if (correct) {
            indicator = "success"
            answer = "correct answer!"
        }

        const isMobile = props.width <= 520 && props.width < (props.height-200);

        let information;
        if (isMobile) {
            indicator += " indicatorMobile"
            information = "infoMobile";
        }
        else {
            information = "infoHorz";
        }
        
        let indicatorSentence;
        if (choice !== 7)
            indicatorSentence = settlements[0][choice].countryLabel+" is the "+ answer;
        else
            indicatorSentence = "Timeout.";
        let moreInfo = props.showInfo ? (<div><h1 className={information}>{settlements[0][0].countryLabel} <br></br>{sentence} <br></br>{settlements[0][settlements[1]].countryLabel}</h1><br></br> <div className="h1button"><h1>Continue</h1></div></div>) : (<div className="h1button"><h1>Continue</h1></div>)
        jsx = (
            <div onClick={() => { nextRound() }}>
                <div className="streak">
                    <p>Highscore: {parseInt(props.cookies["HighscoreCountries"])}</p>
                    <p>Score: {streak}</p>
                </div>
                <div className='wrapperPause center'>
                    <p className={indicator}>{indicatorSentence}</p>
                    {moreInfo}
                </div>
            </div>
        )
    }
    else {
        const isMobile = props.width <= 520 && props.width < (props.height-200);
        const mobileHeight = props.height <= 600;

        let firstClass = isMobile ? "top" : "left";
        let secondClass = isMobile ? "middleVert" : "middle";
        let thirdClass = isMobile ? "bottom" : "right";
        let wrapper = isMobile ? "countryWrapper mobile" : "countryWrapper horz";
        wrapper += mobileHeight ? " sizeDownText" : "";

        firstClass += " h1button";
        secondClass += " h1button";
        thirdClass += " h1button";

        jsx = (<div>
            <div className="streak">
                <p>Highscore: {parseInt(props.cookies["HighscoreCountries"])}</p>
                <p>Score: {streak}</p>
            </div>
            {timerHTML(props.timerEnabled || props.isMultiplayer, time)}
            <h1 className="titleCountry">Which Country is Nearest to:<br></br> {settlements[0][0].countryLabel}</h1>
            <div className={wrapper}>
                <div className={firstClass}>
                    <h1 className="countryOption" onClick={() => { Choice(1) }}>{settlements[0][1].countryLabel}  </h1><br></br>
                    <h1 className="countryOption" onClick={() => { Choice(2) }}>{settlements[0][2].countryLabel}  </h1>
                </div>
                <div className={secondClass}>
                    <h1 className="countryOption" onClick={() => { Choice(3) }}>{settlements[0][3].countryLabel}  </h1><br></br>
                    <h1 className="countryOption" onClick={() => { Choice(4) }}>{settlements[0][4].countryLabel}  </h1>
                </div>
                <div className={thirdClass}>
                    <h1 className="countryOption" onClick={() => { Choice(5) }}>{settlements[0][5].countryLabel}</h1><br></br>
                    <h1 className="countryOption" onClick={() => { Choice(6) }}>{settlements[0][6].countryLabel}</h1>
                </div>
            </div>
        </div>);
    }
    let hearts = [];
    if (props.isHealth){
        for (let i = 0; i < health; i++)
            hearts.push(<img alt="" src={heart} key={i} className="heart"/>);
    }
    
    return (
        <div>
            <div className="heartDiv">
                {hearts}
            </div>
            <h1 className="countryTitle">Which Country is Nearest?</h1><br></br>
            {jsx}
            <span id="rewardId" style={{width: 2, height: 2, background: "red"}}/>
        </div>
    )
}

export default Game;