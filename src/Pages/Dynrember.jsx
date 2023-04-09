import { useState, useEffect } from 'react'
import '../CSS/Dynrember/Dynrember.css'
import Create from './Dynrember/Create.jsx'
import Game from './Dynrember/Game'
import Back from './Dynrember/Back'
import Editor from './Dynrember/Editor'

function Dynrember() {
  const [page, setPage] = useState(0);

  useEffect(() =>{
    document.title = "ofrigut.dev | dynrember"
  });

  let jsx;
  switch(page){
    default:
      break
    case 0:
      jsx = (
        <div className="dynremberWrapper">
          <div>
            <h1 className="dynremberTitle">דינרמבר - משחק זכרון</h1>
          </div>
          <div className="buttons">
            <button className="menuOption" onClick={() => setPage(1)}>
              צור קובץ
            </button><br></br>
            <button className="menuOption" onClick={() => setPage(2)}>
              התחל משחק
              </button>
          </div>
        </div>
      )
      break;
    case 1:
      jsx = (<div>
        <Back setPage={setPage}/>
        <Create/>
      </div>
      )
      break;
    case 2:
      jsx = (
        <div>
        <Back setPage={setPage}/>
        <Game/>
      </div>
      )
      break;
    case 3:
      jsx = (
        <div>
        <Back setPage={setPage}/>
        <Editor/>
      </div>
      )
    break;
  }

  return (
    <div className="App">
      {jsx}
    </div>
  )
}

export default Dynrember
