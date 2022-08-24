import React,{useState,useEffect} from 'react'
import DataList from './DataList';

const DataListContainer = () => {
const [datos, setDatos] = useState([]);

useEffect(()=>
{
    fetch("https://rickandmortyapi.com/api/character")
    .then(dataJson=>dataJson.json())
    .then(data=>setDatos(data.results))
},[]);

  return (
    <DataList datos={datos}/>
  )
}

export default DataListContainer