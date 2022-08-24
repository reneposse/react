import React, { useState } from "react";

const ItemCount = ({ stock,inicial }) => {
 

    const [cantidad, setCantidad] = useState(Number.parseInt(inicial));

    const sumarCantidad = () => {
        if (stock - 1 > cantidad) {
          setCantidad(cantidad + 1);
        }
      };
    
      const restarCantidad = () => {
        if (cantidad > 1) {
          setCantidad(cantidad - 1);
        }
      };

      const buy = ()=> {
        alert(cantidad)
    }


  return (
         <div className="row border my-4 mx-auto d-flex align-items-center">
            <div className="col col-3 d-flex">
              <button
                onClick={restarCantidad}
                className="btn px-4 mx-auto text-danger fs-2"
              >
                -
              </button>
            </div>
            <div className="col col-6 text-center fs-5">{cantidad}</div>
            <div className="col col-3 d-flex">
              <button
                onClick={sumarCantidad}
                className="btn  px-3 text-success mx-auto fs-2"
              >
                +
              </button>
            </div>

            <button variant="primary" onClick={buy}>On Add</button>{' '}
            
          </div>
  )
}

export default ItemCount