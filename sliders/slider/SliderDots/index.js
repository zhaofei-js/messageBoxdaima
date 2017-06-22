import React, {Component} from 'react';
export default class SliderDots extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(step) {
    this.props.turn(step);
  }

  render() {
    let dots = [];
    for (let i = 0; i < this.props.count; i++) {
      dots.push(<span onClick={()=>this.props.turn(i-this.props.pos)} className={"slider-dot "+(i==this.props.pos?'active':'')} key={i}></span>);
    }
    return (
      <div className="slider-dots">
        {
          dots
        }
      </div>
    )
  }
}
