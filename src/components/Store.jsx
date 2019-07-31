import React, { useState } from 'react';
import ListView from './ListView';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';

function Store(props) {
  const [icon, setIcon] = useState('view_list'),
        products = [{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
          }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
          }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
          }],
          onSwitch = () => {
            icon === 'view_list' ? setIcon('view_module') : setIcon('view_list');
          }


  return (
    <div>
      <IconSwitch icon={icon} onSwitch={onSwitch}/> 
      <ListView items={products} icon={icon} />
      <CardsView cards={products} icon={icon} />
    </div>
  )
}

export default Store

