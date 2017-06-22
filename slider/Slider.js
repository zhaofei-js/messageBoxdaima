import React from 'react';
export default class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {pos:0};
  }
  componentDidMount(){
    this.$timer = setInterval(()=>{
      var newPos = this.state.pos+1;
      if(newPos>this.props.images.length)
        newPos = 0;
      this.setState({pos:newPos});
    },3000)
  }
  render(){
    return (
      <div className="sliders">
        {
          this.props.images.map((image,index)=>{
            return (
              <div style={{zIndex:index==this.state.pos?10:0,opacity:index==this.state.pos?1:0}} key={index} className="slider">
                <img src={image.src} alt={image.alt}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
