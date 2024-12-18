import "./App.css";
import { useState } from "react";
// import { Resumen } from "./components";
// import { PracticaCustomHook } from "./components";
import CreacionProyecto from "./components/Resumen/CreacionProyecto/CreacionProyecto";
import { UseState } from "./components";
import {UseEffect} from "./components";
import {CustomHook} from "./components";

function App() {
  // const [summary, setSummary] = useState(false);
  const [projectreact, setProjectreact] = useState(false);
  const [hookUseState, setHookUseState] = useState(false);
  const [hookUseEffect, setHookUseEffect] = useState(false);
  const [customHook, setCustomHook] = useState(false);

  return (
    <>
      {/* <button onClick={() => setSummary(!summary)}>Cambiar</button>
      {!summary && <PracticaCustomHook />}
      {summary && <Resumen />} */}
      {/* { summary ? <Resumen /> : <Practica /> } */}
      <div>
        <button onClick={() => setProjectreact(!projectreact)}>
          Crea proyecto de React
        </button>
      </div>
      {projectreact ? <CreacionProyecto /> : null}

      <div>
        <button onClick={() => setHookUseState(!hookUseState)}>
          Hook useState
        </button>
      </div>
      {hookUseState ? <UseState /> : null}

      <div>
        <button onClick={() => setHookUseEffect(!hookUseEffect)}>
          Hook useEffect
        </button>
        {hookUseEffect ? <UseEffect /> : null}
      </div>

      <div>
        <button onClick={() => setCustomHook(!customHook)}>Custom hook: useFetch</button>
      </div>
      {customHook ? <CustomHook /> : null}
      
    </>
  );
}

export default App;
