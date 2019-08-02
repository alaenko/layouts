import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
  const cards = props.cards;

    return (
      <div className='cards-view'>
        {cards.map(o => <ShopCard card={o} key={o.img}/>)}
      </div>
    ) 
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired
}

export default CardsView

