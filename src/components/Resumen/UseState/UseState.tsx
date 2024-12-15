import "./UseState.css";
import { PracticaUseState } from '../../Practica/PracticaUseState';

export const UseState = () => {
  return (
    <div>
      <h2 className="subtitle">UseState</h2>
      <p>
        Un hook lo que hace es "enganchar" el estado de la aplicación o del
        componente, al principio tiene la palabra *use*, por ejemplo useEffect,
        useState
      </p>
      <p>
        useState es un hook que permite a los componentes funcionales manejar su
        propio estado interno: import {"useState"} from 'react';
      </p>
      <p>
        El hook useState te permite declarar valores de estado y proporciona una
        forma de actualizarlos. El estado es simplemente un valor que puede
        cambiar con el tiempo y que React usa para renderizar nuevamente el
        componente cuando este valor cambia.
      </p>
      <pre>
        <code>const [estado, setEstado] = useState(valorInicial);</code>
      </pre>
      <ul>
        <li>
          estado: es el valor actual del estado. Puedes usarlo dentro de tu
          componente para mostrarlo o realizar cálculos.
        </li>
        <li>
          setEstado: es una función que se utiliza para cambiar el valor del
          estado. Al usarla, React actualiza el componente para reflejar el
          nuevo estado.
        </li>
        <li>
          useState(valorInicial): establece un valor inicial para el estado.
          Puede ser cualquier tipo de dato (número, string, objeto, array,
          etc.).
        </li>
      </ul>
      <p>Ejemplo:</p>
      <pre>
        <code>
                    {`import { useEffect, useState } from 'react'
          import './App.css'
          import { Button } from './components'

          function App() {
            const [count, setCount] = useState(0)
            const [name, setName] = useState('Luisa')

            const countMore = () => {
              setCount((count) => count + 1)
            }

            const changeName = () => {
              setName('La Peter')
            }

            return (
              <>
                <Button label={'Count is ${"count"}'} parentMethod={countMore} />
                <p>{name}</p>
                <Button label="Change name" parentMethod={changeName} />
              </>
            )
          }

          export default App`}
        </code>
      </pre>
      <PracticaUseState />
    </div>
  );
};

export default UseState;
