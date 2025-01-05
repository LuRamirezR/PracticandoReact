import { BookReader } from "../../Practica/PracticaUseRefBookReader";
import { FocusInput } from "../../Practica/PracticaUseRefFocusInput";

export const UseRef = () => {
  return (
    <div>
      <h2>Hook UseRef</h2>
      <p>
        El objetivo 1 de useRef es crear una referencia mutable que persiste
        durante todo el ciclo de vida del componente, SIN causar un re render
      </p>
      <p>El objetivo 2 de useRef es hacer referencia a un elemento del DOM</p>
      <p>
        Ejemplo: Un marcador de un libro que utilizamos para guardar la ultima
        posicion de la lectura, NO modifica el contenido del libro
      </p>
      <p>El código de este ejemplo es:</p>
      <pre>
        <code>
          {`
import { useRef } from "react";

export const BookReader = () => {
    const currentPageRef = useRef<number>(1);

    const nextPage = () => {
        currentPageRef.current += 1;
        console.log(\`Avanzaste a la página: \${currentPageRef.current}\`);
    }

    const previousPage = () => {
        if(currentPageRef.current === 1) {
            console.log(\`No puedes retroceder porque te encuentra en la página: \${currentPageRef.current}\`);
            return;
        }
        currentPageRef.current -= 1;
        console.log(\`Retrocediste a la página: \${currentPageRef.current}\`);
    }
    
    const goToPage = (page: number) => {
        if (page < 1) {
            console.log('No se puede saltar a un valor imposible');
            return;
        }
        currentPageRef.current = page;
        console.log(\`Saltaste a la página: \${currentPageRef.current}\`);
    }

    return (
        <div>
        <h2>Lectura de libro</h2>
        <p>Página actual: {currentPageRef.current}</p>
        <button onClick={previousPage}>Página anterior</button>
        <button onClick={nextPage}>Página siguiente</button>
        <button onClick={() => {goToPage(50)}}>Ir a la página 50</button>
        </div>
    )
}

export default BookReader;
            `}
        </code>
      </pre>
      <p>El resultado: (En este caso los mensajes están en consola)</p>
      <BookReader />

      <h3>Aplicando otro ejemplo</h3>
      <p>
        Tambien se puede aplicar con un elemento del DOM, usando el método
        focus. Y el código es:
      </p>
      <pre>
        <code>
          {`
import { useRef } from "react"

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (!inputRef.current) {
            console.log('No existe la referencia al elemento');
            return
        }
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Escribe algo aquí..." />
            <button onClick={handleButtonClick}>Enfocar en el input</button>
        </div>
    )
}          
            `}
        </code>
      </pre>
      <FocusInput />
    </div>
  );
};
