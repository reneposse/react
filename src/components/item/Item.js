import React from 'react' 

const Item = ({dato}) => {

    return (
        <div className='card'>
            <h3>{dato.name}</h3>
            <img width='300' src={dato.image} alt='' ></img> 
        </div> 
    )
  }

export default Item