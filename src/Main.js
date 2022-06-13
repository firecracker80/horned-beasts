import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render (){
    return(
      <>
        <HornedBeast title="Triceratops"/>
        <HornedBeast title="Horned Predator"/>
      </>
    )
  }
};

export default Main;