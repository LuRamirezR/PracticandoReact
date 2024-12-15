import './App.css'
import { useState } from 'react'
import { Resumen } from './components';
import { PracticaCustomHook } from './components';
import CreacionProyecto from './components/Resumen/CreacionProyecto/CreacionProyecto';
import { UseState } from './components';


function App() {
  const [ summary, setSummary ] = useState(false)
  const [ projectreact, setProjectreact ] = useState(false)
  const [ hookUseState, setHookUseState ] = useState(false)

  
  return (
    <>
    <button onClick={() => setSummary(!summary)}>Cambiar</button>
    { 
      !summary && 
      <PracticaCustomHook/>
    }
    {
      summary && 
      <Resumen />
    }
    {/* { summary ? <Resumen /> : <Practica /> } */}
    <button onClick={() => setProjectreact(!projectreact)}>Crea proyecto de React</button>
    { projectreact ? <CreacionProyecto /> : null }

    <button onClick={() => setHookUseState(!hookUseState)}>Hook useState</button>
    { hookUseState ? <UseState /> : null }
    </>
  )
}


export default App

