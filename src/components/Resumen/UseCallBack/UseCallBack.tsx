import { PhoneBook } from "../../Practica/PracticaUseCallBack"


export const UseCallBack = () => {
  return (
    <div>
        <h2>Hook UseCallBack</h2>
        <p>
            El objectivo: se utiliza para memorizar una instancia de una función, hace que un hijo no renderice
        </p>
        <p>
        Ejemplo: Supongamos que tenés un número de teléfono al que llamas con frecuencia. En vez de marcarlo continuamente lo vamos a almacenar en los contactos del teléfono. A menos el número cambie siempre utilizo el mismo contacto.
        </p>
        <PhoneBook/>
    </div>
  )
}

export default UseCallBack