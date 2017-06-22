import React, {Component} from 'react';
require('./index.css');
import SliderItem from './SliderItem';
import SliderArrows from './SliderArrows';
import SliderDots from './SliderDots';
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {pos: 0};
  }

  turn(step) {
    let pos = this.state.pos + step;
    if (pos == this.props.items.length) {
      pos = 0;
    }
    if (pos == -1) {
      pos = this.props.items.length - 1;
    }
    this.setState({pos});
  }

  autoPlay() {
    this.$timer = setInterval(() => {
      this.turn(1);
    }, this.props.delay * 1000)
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this.autoPlay();
    }
  }

  render() {
    let {items} = this.props;
    let len = items.length;
    return (
      <div className="slider-wrapper" onMouseOver={() => clearInterval(this.$timer)} onMouseOut={() => this.autoPlay()}>
        <ul className="slider"
            style={{width: 1000 * len + 'px', left: -1000 * this.state.pos + 'px', transitionDuration: '1s'}}>
          {
            items.map(function (item, index) {
              return <SliderItem key={index} item={item} count={len}></SliderItem>
            })
          }
        </ul>
        <SliderArrows turn={this.turn.bind(this)}/>
        <SliderDots count={len} turn={this.turn.bind(this)} pos={this.state.pos}/>
      </div>
    )
  }
}
