import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <header><h2>{this.props.title}</h2></header>
        {/* <img 
      src="https://ibb.co/YLPyRRg"
      alt="Triceratops"
      /> */}
      <p>Prehistoric horned beasts in their natural envionment.</p>
      </article>
    )
  }
};

export default HornedBeast;