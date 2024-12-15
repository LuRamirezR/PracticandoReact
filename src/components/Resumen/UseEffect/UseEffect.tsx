export const UseEffect = () => {
  return (
    <div>
      <h2>UseEffect</h2>
      <p>
        useEffect: ayuda a controlar los ciclos de vida del componente. Cuando
        se monta el componente y cada vez que se modifique uno de los valores
        del state. Es para sincronizar con entidades externas
      </p>
      <p>
        Cuando usar useEffect:
        <ol>
          <li>
            Para obtener datos debo comunicarme con un endpoint, que es una
            entidad externa al componente
          </li>
          <li>Operaciones asincronas (limpiar timeouts, listeners)</li>
          <li>
            Parámetros de entrada lo que está dentro de [] es un arreglo de
            dependencias
          </li>
        </ol>
      </p>
      <p>Ejemplo:</p>
      <pre>
        <code>
          {`function App() {
                const [data, setData] = useState([])
                const [loading, setLoading] = useState(false)
                const [error, setError] = useState("")

                const fetchData = async () => {
                  setLoading(true)
                    try {
                      const response = await fetch("https://api.example.com/data")
                
                      if(!response.ok){
                        throw new Error('Error al obtener los datos')
                      }
                
                      const jsonData = await response.json()
                      setData(jsonData)
                    } catch (err) {
                      setError(err as string)
                      console.error(err)
                    } finally {
                      setLoading(false)
                    }
                  }

                useEffect(() => {
                  fetchData()
                }, [])


                if(loading){
                  return <div>Loading...</div>
                }
                if(error){
                  return <div>Uy! Hay un error: {error}</div>
                }
                return (
                  <>
                  <div>{JSON.stringify(data)}</div>
                  </>
                )
              }

              export default App`}
        </code>
      </pre>
    </div>
  );
};

export default UseEffect;
