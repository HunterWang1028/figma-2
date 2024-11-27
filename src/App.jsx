import { useState } from "react";
import "./App.scss";

function App() {
  const [activeMountain, setActiveMountain] = useState(null); // Mountain1 or Mountain2
  const [activeSky, setActiveSky] = useState(null); // Sun or Moon

  const toggleMountain = (mountain) => {
    setActiveMountain((prev) => (prev === mountain ? null : mountain));
  };

  const toggleSky = (sky) => {
    setActiveSky((prev) => (prev === sky ? null : sky));
  };

  return (
    <>
      <header>
        <div className="header-title">
          {activeMountain === "Mountain1" && <p>Mountain 1</p>}
          {activeMountain === "Mountain2" && <p>Mountain 2</p>}
          <p>&</p>
          {activeSky === "Sun" && <p>Sun</p>}
          {activeSky === "Moon" && <p>Moon</p>}
        </div>
        <div className="header-logo">M</div>
      </header>
      <div className="canvas">
        <div className="sky">
          {activeSky === "Sun" && <img src="/Sun.png" alt="sun" />}
          {activeSky === "Moon" && <img src="/Moon.png" alt="moon" />}
        </div>
        <div className="mountain">
          {activeMountain === "Mountain1" && (
            <img src="/mountain1.png" alt="mountain1" />
          )}
          {activeMountain === "Mountain2" && (
            <img src="/mountain2.png" alt="mountain2" />
          )}
        </div>
      </div>
      <div className="btn-container">
        <button
          className={`${activeMountain === "Mountain1" ? "active" : ""}`}
          onClick={() => toggleMountain("Mountain1")}
        >
          Mountain 1
        </button>
        <button
          className={`${activeMountain === "Mountain2" ? "active" : ""}`}
          onClick={() => toggleMountain("Mountain2")}
        >
          Mountain 2
        </button>
        <button
          className={`${activeSky === "Sun" ? "active" : ""}`}
          onClick={() => toggleSky("Sun")}
        >
          Sun
        </button>
        <button
          className={`${activeSky === "Moon" ? "active" : ""}`}
          onClick={() => toggleSky("Moon")}
        >
          Moon
        </button>
        <button className="download">Download card</button>
      </div>
    </>
  );
}

export default App;
