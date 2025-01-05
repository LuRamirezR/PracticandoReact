import "./App.css";
import { useState } from "react";
import CreacionProyecto from "./components/Resumen/CreacionProyecto/CreacionProyecto";
import { UseState } from "./components";
import { UseEffect } from "./components";
import { CustomHook } from "./components";
import { FormZod } from "./components";
import ContextReact from "./components/Resumen/ContextReact/ContextReact";
import { UseRef } from "./components/Resumen/UseRef/UseRef";

function App() {
  // const [summary, setSummary] = useState(false);
  const [projectreact, setProjectreact] = useState(false);
  const [hookUseState, setHookUseState] = useState(false);
  const [hookUseEffect, setHookUseEffect] = useState(false);
  const [customHook, setCustomHook] = useState(false);
  const [customFormZod, setCustomFormZod] = useState(false);
  const [contextReact, setContextReact] = useState(false);
  const [hookUseRef, setHookUseRef] = useState(false);

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
        <button onClick={() => setCustomHook(!customHook)}>
          Custom hook: useFetch
        </button>
      </div>
      {customHook ? <CustomHook /> : null}

      <div>
        <button onClick={() => setCustomFormZod(!customFormZod)}>
          Custom Form with zod verification
        </button>
      </div>
      {customFormZod ? <FormZod /> : null}

      <div>
        <button onClick={() => setContextReact(!contextReact)}>
          Context de React
        </button>
      </div>
      {contextReact ? <ContextReact /> : null}

      <div>
        <button onClick={() => setHookUseRef(!hookUseRef)}>Hook useRef</button>
      </div>
      {hookUseRef ? <UseRef /> : null}
    </>
  );
}

export default App;
