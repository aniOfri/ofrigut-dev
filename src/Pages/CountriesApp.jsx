// CSS
import '../CSS/Countries/Countries.css'

// Components
import Menu from './Countries/components/menu';
import Game from './Countries/components/game';
import FallingObject from './Countries/components/fallingobject'

// Modules
import { useEffect, useState } from 'react';
import { checkCookies, createCookies } from './Countries/modules/Cookies';

function Countries() {

  useEffect(() =>{
    document.title = "ofrigut.dev | countries"
  });

  if (checkCookies())
    createCookies();

  const COOKIES = document.cookie
    .split(';')
    .reduce((res, c) => {
      const [key, val] = c.trim().split('=').map(decodeURIComponent)
      try {
        return Object.assign(res, { [key]: JSON.parse(val) })
      } catch (e) {
        return Object.assign(res, { [key]: val })
      }
    }, {})

  const [timerEnabled, setTimerEnabled] = useState(COOKIES["Timer"]);
  const [showInfo, setShowInfo] = useState(COOKIES["ShowInfo"]);
  const [isHealth, setIsHealth] = useState(COOKIES["Health"]);
  const [minPop, setMinPop] = useState(parseInt(COOKIES["MinPop"]));
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState(true);
  
  // Mobile related States
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  function startGame() {
    setMenu(false);
    if (timerEnabled) {
      setIsActive(true);
    }
  }
  
  let jsx;
  if (menu) jsx = (<Menu isHealth={isHealth} setIsHealth={setIsHealth} cookies={COOKIES} setShowInfo={setShowInfo} showInfo={showInfo} setMinPop={setMinPop} minPop={minPop} setTimerEnabled={setTimerEnabled} timerEnabled={timerEnabled} startGame={startGame} />)
  else
    jsx = (<Game width={width} height={height} isHealth={isHealth} cookies={COOKIES} setShowInfo={setShowInfo} showInfo={showInfo} minPop={minPop} isActive={isActive} timerEnabled={timerEnabled} setIsActive={setIsActive} setMenu={setMenu} />)

  return (
    <div className="CountriesApp">
        {/*<img className="backgroundImg" src={backgroundImage}/>*/}
        <FallingObject width={width} height={height}/>
        <div className="text">
          {jsx}
        </div>
    </div>
  );
}

export default Countries;
