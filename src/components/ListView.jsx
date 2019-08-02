import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
  const items = props.items
  
  return (
    <div className='list-view'>
      {items.map(o => <ShopItem item={o} key={o.img}/>)}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListView

