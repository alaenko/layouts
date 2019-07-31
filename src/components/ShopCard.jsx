import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
  const {name, price, color, img} = props.card;

  return (
    <div className="shop-card" key={img}>
      <h3>{name}</h3>
      <p>{color}</p>
      <img src={img} alt={name}/>
      <div className="card-bottom">                    
        <p style={{color: "red"}}>${price}</p>
        <button className="button">Add to card</button>
      </div>
    </div> 
  )
}

ShopCard.propTypes = {
  card: PropTypes.object.isRequired
}

export default ShopCard

