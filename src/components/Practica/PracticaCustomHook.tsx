//import React from 'react'
import { useFetch } from '../../hooks/useFetch';

interface Data {
    name: string;
    lastName: string;
    age: number;
}

const url = "https://66ad1390f009b9d5c7344ff5.mockapi.io/listaEventos";

export const PracticaCustomHook = () => {
    const { data, error, loading} = useFetch<Data[]>(url);

    if(loading){
      return <div>Loading...</div>
    }
    if(error){
      return <div>Uy! Hay un error: {error.message}</div>
    }
    return (
      <>
        {console.log({data})}
        {
          data && data.map((item) => (
            <div>
              <p>{item.name}</p>
              <p>{item.lastName}</p>
              <p>{item.age}</p>
            </div>
          ))
        }
        <div>{JSON.stringify(data)}</div>
      </>
    )
}


