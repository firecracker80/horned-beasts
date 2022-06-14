import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render (){
    return(
      <>
        <HornedBeast 
        title="Triceratops"
        imageUrl="https://www.pexels.com/photo/styracosaurus-in-a-jungle-12365157/" alt="Triceratops"
        description="Prehistoric horned herbivore."/>
        {/* <HornedBeast 
        title="Mammoth"
        imageUrl="https://www.istockphoto.com/photo/mammoth-in-autumn-gm1133041273-300608514?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprehistoric-animals&utm_term=prehistoric%20animals%3A%3Asearch-explore-top-affiliate-outside-feed-x-v2%3Acontrol" alt="Mammoth"
        description="Prehistoric horned beast in its natural environment."/> */}
      </>
    )
  }
};

export default Main;