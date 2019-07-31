import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
  const cards = props.cards,
        icon = props.icon;

  if (icon === 'view_list') {
    return (
      <div className='cards-view'>
        {cards.map(o => <ShopCard card={o} key={o.img}/>)}
      </div>
    )
  } else {
    return null;
  }  
  
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired
}

export default CardsView

