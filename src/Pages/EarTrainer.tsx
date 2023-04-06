import "../CSS/EarTrainer/EarTrainer.css";
import Soundplayer from "./EarTrainer/Soundplayer";
import Settings from "./EarTrainer/Settings";
import { useState } from "react";
import Gear from "../Assets/Settings.svg";
import Arrow from "../Assets/Arrow.png";

export default function EarTrainer() {
  const [variety, setVariety] = useState(3);
  const [instrument, setInstrument] = useState("0");
  const [showTone, setShowTone] = useState(false);
  const [range, setRange] = useState([48, 72]);

  /* Pages = {
    false: Game,
    true: Settings
  } */
  const [page, setPage] = useState(false);

  const varietyProps = {
    value: variety,
    setVariety: setVariety,
  };

  const instrumentProps = {
    value: instrument,
    setInstrument: setInstrument,
  };

  const toneProps = {
    value: showTone,
    setShowTone: setShowTone,
  };

  const rangeProps = {
    value: range,
    setRange: setRange,
  };

  const handleNav = () => {
    setPage(!page);
  };

  var currentPage = () => {
    if (page)
      return (
        <Settings
          variety={varietyProps}
          instrument={instrumentProps}
          tone={toneProps}
          range={rangeProps}
        />
      );
    else
      return (
        <Soundplayer
          variety={variety}
          instrument={instrument}
          showTone={showTone}
          range={range}
        />
      );
  };

  return (
    <div className="EarTrainer">
      <div className="App">
        <img
          alt=""
          className="navigator"
          src={page ? Arrow : Gear}
          onClick={handleNav}
        />
        {currentPage()}
      </div>
    </div>
  );
}
