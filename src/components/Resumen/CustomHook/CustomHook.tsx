import { PracticaCustomHook } from "../../Practica/PracticaCustomHook";

export const CustomHook = () => {
  return (
    <div>
      <h2>Custom Hook useFetch</h2>
      <p>
        Para custom hook, creo una carpeta llamada hooks y allí creo el archivo
        useFetch.ts
      </p>
      <pre>
        <code>
            {`
            import { useEffect, useState } from "react";

            type Data<T> = T | null;
            type ErrorType = Error | null;

            interface Params<T> {
                data: T | null;
                loading: boolean;
                error: ErrorType;
            }

            export const useFetch = <T>(url:string): Params<T> => {
                const [data, setData] = useState<Data<T>>(null);
                const [loading, setLoading] = useState(true);
                const [error, setError] = useState<ErrorType>(null)

                useEffect(() => {
                    const controller = new AbortController();
                    setLoading(true);

                    const fetchData = async () => {
                        try {
                            const response = await fetch(url, controller);

                            if (!response.ok) {
                                throw new Error("Error en la petición");
                            }

                            const jsonData: T = await response.json();
                            setData(jsonData);
                            setError(null);
                        } catch (err) {
                            setError(err as Error);
                        } finally {
                            setLoading(false);
                        }
                    }
                    fetchData();

                    return () => {
                        controller.abort();
                    }
                    
                }, [url])

                return { data, loading, error };
            }
            `}
        </code>
      </pre>
      <p>
        Donde el componente principal <strong>App.tsx</strong> utiliza este
        custom hook
      </p>
      <pre>
        <code>
          {`
                import './App.css'
                import { useFetch } from './hooks';

                const url = "https://api.example.com/data";

                interface Data {
                name: string;
                lastName: string;
                age: number;
                }

                function App() {
                const { data, error, loading} =useFetch<Data>(url);

                if(loading){
                    return <div>Loading...</div>
                }
                if(error){
                    return <div>Uy! Hay un error: {error.message}</div>
                }
                return (
                    <>
                    <div>{JSON.stringify(data)}</div>
                    </>
                )
                }

                export default App;`}
        </code>
      </pre>
      <p>
        Este hook aplicado, consumiendo una API de mockapi muestra los datos: name, lastname y age
      </p>
      <PracticaCustomHook />
    </div>
  );
};

export default CustomHook;
