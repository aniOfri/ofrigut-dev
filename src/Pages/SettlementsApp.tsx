// CSS
import '../CSS/Settlements/Settlements.css'

// Components
import Menu from './Settlements/components/menu';
import Game from './Settlements/components/game';
//import Cloud from './Settlements/components/cloud';

// Modules
import { useEffect, useState } from 'react'
import { checkCookies, createCookies } from './Settlements/modules/Cookies';

export default function Settlements() {
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
    }, {}) as any[]

  const [timerEnabled, setTimerEnabled] = useState(COOKIES["Timer" as keyof typeof COOKIES]);
  const [showInfo, setShowInfo] = useState(COOKIES["ShowInfo" as keyof typeof COOKIES]);
  const [isHealth, setIsHealth] = useState(COOKIES["Health" as keyof typeof COOKIES]);
  const [minPop, setMinPop] = useState(parseInt(COOKIES["MinPop" as keyof typeof COOKIES]));
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
  
  console.log(width, height);

  let jsx;
  if (menu) jsx = (<Menu isHealth={isHealth} setIsHealth={setIsHealth} cookies={COOKIES} setShowInfo={setShowInfo} showInfo={showInfo} setMinPop={setMinPop} minPop={minPop} setTimerEnabled={setTimerEnabled} timerEnabled={timerEnabled} startGame={startGame} />)
  else
    jsx = (<Game width={width} height={height} isHealth={isHealth} cookies={COOKIES} setShowInfo={setShowInfo} showInfo={showInfo} minPop={minPop} isActive={isActive} timerEnabled={timerEnabled} setIsActive={setIsActive} setMenu={setMenu} />)

  return (
    <div dir="rtl" className="SettlementsApp">
        {/*<Cloud className="cloud" big={true} size={width < height ? width/1000 : height/1000} x_offset={width < height ? -width/10 : 2*width/3} y_offset="0"/> -->
        <Cloud className="cloud" size={width < height ? width/2000 : height/2000} x_offset={width < height ? -width/5 : width/9} y_offset={height/4}/>*/}
        <div className="text">
          {jsx}
        </div>
    </div>
  );
}

