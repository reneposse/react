import React from 'react' ;
import ItemCount from '../itemCount/ItemCount';
 

export default function ItemListContainer ({datos}){
    return (
        <div>
            <span>{datos}</span>
            <ItemCount stock="5" inicial="1"></ItemCount>
        </div>
    )
}

