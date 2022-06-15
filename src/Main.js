import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'
import './Main.css';

class Main extends React.Component{
  
  render (){
    let beasts = data.map(horned => 
    <HornedBeast
      title={horned.title}
      image_url={horned.image_url}
      // alt={horned.alt}
      description={horned.description}
      keyword={horned.keyword}
      horns={horned.horns}
      key={horned._id}
    />);
    
    return(
      <main>
        {beasts}
      </main>
    )
  }
};

export default Main;