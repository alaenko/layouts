import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
  const {name, price, color, img} = props.item;

  return (
    <div className="shop-item">
      <img src={img} alt={name}/>
      <h3>{name}</h3>
      <p>{color}</p>                   
      <p style={{color: "red"}}>${price}</p>
      <button className="button">Add to card</button>
    </div> 
  )
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ShopItem
