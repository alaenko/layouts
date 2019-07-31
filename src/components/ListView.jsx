import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
  const items = props.items,
  icon = props.icon;
  
  if (icon === 'view_module') {
    return (
      <div className='list-view'>
        {items.map(o => <ShopItem item={o} key={o.img}/>)}
      </div>
    )
  } else {
    return null;
  } 
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired
}

export default ListView

