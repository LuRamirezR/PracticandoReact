import { PracticaModal } from "../../Practica/PracticaModal"



const ModalResumen = () => {
  return (
    <div>
        <h2>Modal en React</h2>
        <p>
          Los modales en React sirven para manejar contenido que debe renderizarse fuera de la jerarquía DOM principal del componente, pero que sigue siendo parte de la aplicación React. Son útiles para garantizar que ciertos elementos, como modales, tooltips o pop-ups, no se vean afectados por problemas de estilos o posicionamiento.
        </p>
        <p>
          Al crear el componente modal, se crea la siguiente estructura de archivos y carpetas:
          <pre>
            <code>
              {`
src/
└── components/
    └── Modal/
        ├── Modal.css               # Estilos específicos para el componente Modal.
        ├── Modal.tsx               # Componente principal del modal.
        └── context/                # Carpeta para manejar la lógica del contexto del modal.
            ├── ModalContext.tsx    # Archivo para definir el contexto del Modal.
            └── UseModalContext.ts  # Hook personalizado para acceder al contexto del Modal.

              `}
            </code>
          </pre>
          <ul>
            <li>
              Modal.tsx: Implementa el componente principal del modal, incluyendo el uso de ReactDOM.createPortal y la lógica de apertura/cierre.
            </li>
            <li>
              ModalContext.tsx: Define el Contexto de React para manejar el estado global del modal (como si está abierto o cerrado) y proveerlo a la aplicación.
            </li>
            <li>
              UseModalContext.ts: Implementa un hook personalizado para que otros componentes puedan usar fácilmente el contexto del modal sin necesidad de manejar directamente React.useContext
            </li>
          </ul>
        </p>
        <p>
          En el archivo index.html se debe adicionar la línea de código que se muestra a continuación:
          <pre>
            <code>
              {`
<div id="modal"></div>
              `}
            </code>
          </pre>
        </p>
        <p>
          Y en el archivo main.tsx el componente App se debe envolver en el componente ModalProvider. Queda de la siguiente manera:
        </p>
        <pre>
          <code>
            {`
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
            `}
          </code>
        </pre>
        <p>
          En el siguiente ejemplo se implementa un modal en React.
        </p>
        <PracticaModal/>
    </div>
  )
}

export default ModalResumen