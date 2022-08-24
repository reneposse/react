import React,{useState,useEffect} from 'react'  
import ItemList from '../itemList/ItemList';
 

const ItemListContainer = () => {
const [datos, setDatos] = useState([]);

useEffect(()=>
{
    fetch("https://rickandmortyapi.com/api/character")
    .then(dataJson=>dataJson.json())
    .then(data=>setDatos(data.results))
},[]);

  return (
    <>
    <ItemList datos={datos}/>
    </>
    
  )
}

export default ItemListContainer