import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render (){
    return(
      <>
        <HornedBeast 
        title="Triceratops"
        imageUrl="https://www.pexels.com/photo/styracosaurus-in-a-jungle-12365157/" 
        alt="Triceratops"
        description="Prehistoric horned herbivore."/>
        <HornedBeast 
        title="Mammoth"
        imageUrl="https://www.istockphoto.com/photo/mammoth-in-autumn-gm1133041273-300608514" 
        alt="Mammoth"
        description="Prehistoric horned beast in its natural environment."/>
      </>
    )
  }
};

export default Main;