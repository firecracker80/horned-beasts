import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {allBeasts: this.props.data}
  // }
  
  

  render (){
    let beasts = this.props.allBeasts.map(horned => {
    return <HornedBeast
      handleOnShowModal = {this.props.handleOnShowModal}
      Card = {horned}
      title={horned.title}
      image_url={horned.image_url}
      description={horned.description}
      keyword={horned.keyword}
      horns={horned.horns}
      key={horned._id}
    />;
    
});

  return(
    <main>
      {beasts}
    </main>
  );
};
}

export default Main;
