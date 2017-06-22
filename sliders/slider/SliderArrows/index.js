import React,{Component} from 'react';
export default class SliderItem extends Component{
  constructor(props){
    super(props);
  }
  handleClick(step){
    this.props.turn(step);
  }
  render(){
   return (
     <div className="slider-arrows">
        <span onClick={()=>this.handleClick(-1)} className="arrow arrow-left">&lt;&lt;</span>
        <span onClick={()=>this.handleClick(1)} className="arrow arrow-right">&gt;&gt;</span>
     </div>
   )
  }
}
