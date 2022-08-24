import React from 'react'
import Data from './Data';

const DataList = ({datos}) => {
  return (
<>
{
    datos.map(dato=><Data dato={dato} key={dato.id}/>)
}
</>
)
}

export default DataList