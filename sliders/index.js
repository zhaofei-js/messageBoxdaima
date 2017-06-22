import React from 'react';
import {render} from 'react-dom';
import Slider from './slider';
const IMAGES_DATA = [
  {src:require('./images/1.jpg'), alt:'1'},
  {src:require('./images/2.jpg'), alt:'2'},
  {src:require('./images/3.jpg'), alt:'3'},
  {src:require('./images/4.jpg'), alt:'4'}
]

render(<Slider
  items={IMAGES_DATA}
  speed={1}
  delay={2}
  pause={true}
  autoplay={true}
  dots={true}
  arrows={true}
/>,document.getElementById('app'));
