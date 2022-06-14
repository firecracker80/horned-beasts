import React from 'react';
import pic from './triceratops.jpg';
class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <header><h2>{this.props.title}</h2></header>
        <img style = {{width: 200, height: 300}}
          src={pic}
          alt="Triceratops"
      />
      <p>Prehistoric horned beasts in their natural envionment.</p>
      </article>
    )
  }
};

export default HornedBeast;