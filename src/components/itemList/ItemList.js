import React from 'react' 
import Item from '../item/Item'

const ItemList = ({datos}) => {
  return (
<>
{
    datos.map(dato=><Item dato={dato} key={dato.id}/>)
}
</>
)
}

export default ItemList