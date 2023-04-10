import "../../CSS/EarTrainer/Settings.css"
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import {Intervals, MidiNumbers} from "./Helper"

function intervalName(e: number){
    let intervals = Intervals;
    let intervalValue = intervals[e-1];
    return intervalValue.label;
}

function instrumentName(e: string){
    switch(e){
        default:
            return "פסנתר"
        case '0':
            return "פסנתר"
        case '1':
            return "גיטרה"
        case '2':
            return "חצוצרה"
        case '3':
            return "אקראי"
    }
}

function rangeName(e: number[]){
    let lower = MidiNumbers[e[0] as keyof typeof MidiNumbers];
    let higher = MidiNumbers[e[1] as keyof typeof MidiNumbers]
    if (lower === "דו1" && higher === "דו6")
        return "טווח מלא"
    if (lower === higher)
        return "תו ראשון תמיד יהיה " + lower;
    return lower + " - " + higher;
}

export default function Settings(props: any){
    const variety = props.variety;
    const instrument = props.instrument;
    const tone = props.tone;
    const range = props.range;

    const handleVariety = (e: any) => {
        variety.setVariety(e.target.value);
    }

    const handleInstrument = (e: any) => {
        instrument.setInstrument(e.target.value);
    }
    
    const handleTone = (e: any) => {
        tone.setShowTone(e.target.checked);
    }

    const handleRange = (e: any) => {
        range.setRange(e.target.value);
    }

    return (
        <div>
            <div className="HR"/>
            <div className="Setting">
                <h1 className="SettingTitle">גודל המרווח המקסימלי</h1>
                <h1 className="Info">{intervalName(variety.value)}</h1>
                <Slider
                    value={variety.value}
                    className="Slider"
                    onChange={handleVariety}
                    min={2}
                    max={15}
                    scale={intervalName as any}
                    sx={{
                        width: "20%"
                        }}
                    />
            </div>
            <div className="HR"/>
            <div className="Setting">
                <h1 className="SettingTitle">סוג כלי הנגינה</h1>
                <h1 className="Info">{instrumentName(instrument.value)}</h1>
                <Radio
                    checked={instrument.value === '0'}
                    onChange={handleInstrument}
                    value='0'
                    name="radio-buttons"
                />
                <Radio
                    checked={instrument.value === '1'}
                    onChange={handleInstrument}
                    value='1'
                    name="radio-buttons"
                />
                <Radio
                    checked={instrument.value === '2'}
                    onChange={handleInstrument}
                    value='2'
                    name="radio-buttons"
                />
                <Radio
                    checked={instrument.value === '3'}
                    onChange={handleInstrument}
                    value='3'
                    name="radio-buttons"
                />
            </div>
            <div className="HR"/>
            <div className="Setting">
                <h1 className="SettingTitle">הראה מספר טונים</h1>
                <Checkbox
                  checked={tone.value}
                  onChange={handleTone}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } }}
                />
            </div>
            <div className="HR"/>
            <div className="Setting">
                <h1 className="SettingTitle">טווח תווים</h1>
                <h1 className="Info">{rangeName(range.value)}</h1>
                <Slider
                    value={range.value}
                    className="Slider"
                    onChange={handleRange}
                    disableSwap
                    min={24}
                    max={84}
                    step={1}
                    sx={{
                        width: "20%"
                        }}
                />
            </div>
            <div className="HR"/>
        </div>
    )
}