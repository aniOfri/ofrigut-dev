import "../../CSS/EarTrainer/Score.css"

export default function Score(props: any){
    return (
        <div className="titlewrapper">
            <h1 className="score">תשובות נכונות: {props.score}</h1>
            <h1 className="score">תשובות נכונות ברצף: {props.streak}</h1>
            <h1 className="score"> הרצף הכי ארוך: {props.longestStreak}</h1>
        </div>
    )
}