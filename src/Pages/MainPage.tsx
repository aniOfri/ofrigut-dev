import "../CSS/MainPage/MainPage.css";
import HearingIcon from '@mui/icons-material/Hearing';

export default function MainPage() {
  return (
        <div className="App">
          <h1>welcome to ofrigut.dev</h1>
          <div className="Services">
            <a href="/EarTraining">
              <div className="Service" id="EarTrainer">
                <h3>Hebrew Interval Training</h3>
                <HearingIcon/>
              </div>
            </a>
          </div>
        </div>
      );
}
