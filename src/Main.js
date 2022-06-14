import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render (){
    return(
      <>
        <HornedBeast 
          title="Triceratops"
          imageUrl="https://images.pexels.com/photos/12365157/pexels-photo-12365157.jpeg" 
          alt="Triceratops"
          description="Prehistoric horned herbivore."/>
        <HornedBeast 
          title="Mammoth"
          imageUrl="https://images.unsplash.com/photo-1557160891-1f0111447464" 
          alt="Mammoth"
          description="Prehistoric horned beast in its natural environment."/>
      </>
    )
  }
};

export default Main;