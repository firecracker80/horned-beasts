import React from 'react';
// import pic from './triceratops.jpg';
class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <header><h2>{this.props.title}</h2></header>
        <img style = {{width: 200, height: 300}}
          src={this.props.imageUrl}
          alt={this.props.alt}
      />
      <p>{this.props.description}</p>
      </article>
    )
  }
};

export default HornedBeast;