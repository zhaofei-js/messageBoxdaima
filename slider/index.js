import React from 'react';
import ReactDOM from 'react-dom';
require('./slider.css');
import Slider from './Slider';
let images = [
  {src:require('./images/1.jpg'), alt:'1'},
  {src:require('./images/2.jpg'), alt:'2'},
  {src:require('./images/3.jpg'), alt:'3'},
  {src:require('./images/4.jpg'), alt:'4'}
]
ReactDOM.render(
  <Slider images={images}/>,
  document.querySelector('#app')
);
