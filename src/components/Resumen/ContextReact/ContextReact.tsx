import PracticaContext from "../../Practica/PracticaContext"

const ContextReact = () => {
  return (
    <div>
        <h2>Context de React</h2>
        <p>
        El context sirve para compartir datos entre componentes hermanos, es decir que son totalmente independientes. NO se puede utilizar entre componentes padre/hijo
        </p>
        <p>
        Se crea la carpeta <strong>context</strong> de forma global, es decir: src/context, y dentro de la carpeta se crea el archivo global.context.ts, donde se define y exporta un contexto global (GlobalContext) y un hook personalizado (useGlobalContext). El código es:
        </p>
        <pre>
            <code>
                {`
import { createContext, useContext } from "react";

interface GlobalContextType {
  value: number | null
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => { }
})

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context.value && context.value !== 0) {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context;
}
                `}
            </code>
        </pre>
        <p>
        También se crea otro archivo <strong>global.provider.tsx</strong> donde se define y exporta un proveedor para el contexto global, que envuelve a los componentes hijos y les proporciona acceso al contexto. El código es:
        </p>
        <pre>
            <code>
                {`
import { ReactNode, useState } from "react"
import { GlobalContext } from "./global.context"

const EmptyGlobalState: number = 0

interface GlobalProps {
  children: ReactNode
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState)

  return (
    <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
  )
}
                `}
            </code>
        </pre>
        <p>
        Y en el componente Button se implementa el Contexto, utilizando el hook personalizado, para compartir datos entre componentes hermanos. El código es:
        </p>
        <pre>
            <code>
                {`
import { ReactNode } from "react"
import "./Button.css"
import { useGlobalContext } from "../../context/global.context"

interface Props {
  children: ReactNode,
  parentMethod: () => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext()

  return (<div className="color-red">{value}:{children}</div>)
}

export const Button = ({ children, parentMethod }: Props) => {
  const { setValue } = useGlobalContext()

  const handleClick = () => {
    setValue(10)
    parentMethod()
  }

  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  )
}
                `}
            </code>
        </pre>
        <PracticaContext />
    </div>
  )
}

export default ContextReact