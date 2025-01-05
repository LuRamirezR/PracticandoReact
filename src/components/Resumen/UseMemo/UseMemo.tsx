

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
    </div>
  )
}

export default UseMemo