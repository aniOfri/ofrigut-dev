import React, {useState} from 'react'
import "../../CSS/EarTrainer/Soundplayer.css"
import Score from "./Score";
import {Audio, Intervals} from "./Helper"


// Return a random interval in the range of *variety
function randomInterval(variety: number){
    const intervals = Intervals;
    let intervalValue = intervals[Math.floor(Math.random() * variety)];
    
    return intervalValue;
}

// Tone addon string builder
function getTone(showTone: boolean, interval: any){
    return showTone ? " ("+interval.value+")" : ""
}

// Return a list of all the options available in the range of *variety 
function getOptions(variety:number , showTone: boolean){
    var options = [];
    let intervals = Intervals;
    for (let i = variety-1; i >= 0; i--){
        options.push(intervals[i].label + getTone(showTone, intervals[i]));
    }

    return options;
}

// Main Module
export default function Soundplayer(props: any){
    const variety = props.variety;
    const instrument = props.instrument;
    const showTone = props.showTone;
    const range = props.range;

    const [currentInterval, setCurrentInterval] = useState(randomInterval(variety));
    const [currentFirstNote, setFirstNote] = useState(range[0]);
    const [clickedOn, setClickedOn] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(true);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [longest, setLongest] = useState(0);

    
    // Handle click on options
    const handleClick = (e: any) => {
        setClickedOn(true);
        
        // If correct answer
        if (e.target.innerHTML === currentInterval.label + getTone(showTone, currentInterval)){
            setScore(score + 1);
            setStreak(streak + 1);
            setLongest(streak + 1 > longest ? streak + 1 : longest);
        }
        else setStreak(0);
    }

    // Build the JSX of all the options
    var optJsx: any[] = [];
    var options = getOptions(variety, showTone);
    options.forEach(function(opt){
        optJsx.push(<button key={opt} id={opt === currentInterval.label + getTone(showTone, currentInterval) ? "correct" : ""} disabled={clickedOn} className="buttonOptions" onClick={handleClick}>{opt}</button>);
        
        // Breakline every four segmenets 
        if(optJsx.length % 4 === 0){
            optJsx.push(<br key={optJsx.length}/>)
        }
    })

    // Handle click on "Play interval" button
    const handleSound = () => {
        setSoundPlayed(true);
        
        let newRound = clickedOn;
        if (clickedOn) setClickedOn(false);

        
        // Get Instrument
        let chosenInstrument = () => {
            switch (instrument){
                default:
                    return Audio.Instrument[0]
                case "0":
                    return Audio.Instrument[0]
                case "1":
                    return Audio.Instrument[1]
                case "2":
                    return Audio.Instrument[2]
                case "3":
                    return Audio.Instrument[Math.floor(Math.random()*3)];
            }
        }



        // Play the audio:
        chosenInstrument().then(function (instrument) {
            // If new round, choose a random interval, else play the last interval played.
            let interval = newRound ? randomInterval(variety) : currentInterval;
            if (newRound)
                while (interval === currentInterval) interval = randomInterval(variety);

            // If new round, get a new first note from the range, else use the last one used.
            let firstNote = clickedOn ? Math.floor(Math.random() * (range[1] - range[0])) + range[0] : currentFirstNote;

            // Initialize the second note.
            let secondNote = firstNote + interval.value*2;
            
            // Play the notes in *time
            let time = 1
            instrument.schedule(Audio.Context.currentTime, [ { time: 0, note: firstNote}, { time: time/2, note: secondNote}]);
            instrument.stop(Audio.Context.currentTime + time);
            
            // If new round, set the new offset and interval as the "one currently being used variable"
            if (newRound){
                setFirstNote(firstNote);
                setCurrentInterval(interval);
            }
          })
    }

    // Every new round play the interval once.
    if (!soundPlayed) handleSound();

    return (
        <div>
            <Score score={score} streak={streak} longestStreak={longest} />
            <button className="buttonClass"
                onClick={handleSound}>
                {clickedOn ? "מרווח הבא" : "השמע מרווח"}
            </button><br/>
            <h1 className="options">{optJsx}</h1>
        </div>
    )
}