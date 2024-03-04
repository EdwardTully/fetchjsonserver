import React from 'react'

function ItemCard(props) {
  return (
    <div className="itemCard">
        <h3>{props.title}</h3>
        <div className='cardWindow'>
            <img id='itemPic' src={props.image} alt='noImage' />
        </div>
        <span id="description">{props.description}!!!</span>
        <span id="price"> Your's for only ${props.price}</span>
        

    </div>
  )
}

export default ItemCard