import mainlogo from "./assets/IMG_1260.PNG"
import "./App.css"


function App() {

  return (
    <>
      <div>
        <div className='top-section'>
          <img src={mainlogo} className="pale-logo"></img>
        </div>
        <div className="studio-section">
          <h2>THE STUDIO</h2>
          <p>
            putu putu putu putu putu putu patoti crotiz maaaaannnter
          </p>
        </div>
        <div className="equipment-section">
          <h2>OUR EQUIPMENT</h2>
          <div className="equipment-buttons">
            <div className="button-col1">
              <button>MICROPHONES</button>
              <button>OUTBOARD GEAR</button>
            </div>
            <div className="button-col2">
              <button>MONITORING</button>
              <button>INSTRUMENTS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
