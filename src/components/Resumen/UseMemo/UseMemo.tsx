import { ShoppingCart } from "../../Practica/PracticaUseMemo"


export const UseMemo = () => {
  return (
    <div>
        <h2>Hook de React: UseMemo</h2>
        <p>
            El objetivo de useMemo es memorizar (cache) el resultado de ejecutar una función y evitar cálculos innecesarios, para evitar que se vuelva a llamar el metodo
        </p>
        <p>
            Controlar si el beneficio de memorizarlo es superior al de recalcularlo
        </p>
        <p>
            Ejemplo: Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra. Sino agregamos nada ni tampoco cambio nada, el total sigue siendo el mismo
        </p>
        <p>
          El hook useMemo recibe dos argumentos: una función y un arreglo de dependencias. La función es la que se va a memorizar y el arreglo de dependencias es el que se va a comparar para saber si se debe volver a ejecutar la función o no.
        </p>
        <p>
        {`useMemo(() => first, [second])`} Donde <strong>first</strong> es la función y <strong>second</strong> es el arreglo de dependencias
        </p>
        <p>
          El código queda así:
        </p>
        <pre>
          <code>
            {`
import { useMemo, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
}

interface Item {
    id: number;
    name: string;
    price: number;
  }
  
  export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
      {
        id: 1, name: "Manzana", price: 1.5
      },
  
      {
        id: 2, name: "Pera", price: 2.0
      },
  
      {
        id: 3, name: "Leche", price: 1.0
      }
    ]);
  
    const [discount, setDiscount] = useState<number>(0)
  
    const totalCost = useMemo(() =>
      items.reduce((total, item) => total + item.price, 0)
      , [items])
  
    const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);
  
    const addItem = () => {
      const newItem = {
        id: items.length + 1,
        name: \`Producto \${items.length + 1}\`,
        price: Math.random() * 5
      }
  
      setItems([...items, newItem])
    }
  
    return (
      <div>
        <h2>Lista de Compras</h2>
  
        <ul>
          {
            items.map(item => (
              <li key={item.id}>
                {item.name}: \${item.price.toFixed(2)}
              </li>
            ))
          }
        </ul>
  
        <p>Costo Total: \${totalCost.toFixed(2)}</p>
  
        <p>
          Descuento: $
          <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)} />
        </p>
  
        <p>Costo Final: \${finalCost.toFixed(2)}</p>
  
        <button onClick={addItem}>Agregar Producto</button>
      </div>
    )
  
}
            `}
          </code>
        </pre>
        <ShoppingCart />
    </div>
  )
}

export default UseMemo