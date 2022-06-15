import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: 0
    }
    // console.log('liked');
  };

likesCampaign = () => {
  this.setState({
    likes: this.state.likes + 1
  })
}
  
  render(){
    
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.image_url} />
    <Card.Body>
      <Card.Title><h2>{this.props.title}</h2></Card.Title>
      <Card.Text>
        {/* <p onClick={this.likesCampaign} >{this.state.likes} ❤️</p> */}
        <p>{this.props.description}</p>
        <p>{this.props.keyword}</p>
        <p>{this.props.horns}</p>
      </Card.Text>
      <Button variant="warning" onClick={this.likesCampaign}>{this.state.likes} ❤️</Button>
      </Card.Body>
    </Card>
      // <article>
      //   <header><h2>{this.props.title}</h2></header>

      //   <img 
      //     style = {{width: 200, height: 300}}
      //     src={this.props.image_url}
      //     alt={this.props.alt}
      //     />
      //   <p onClick={this.likesCampaign} >{this.state.likes} ❤️</p>
      //   <p>{this.props.description}</p>
      //   <p>{this.props.keyword}</p>
      //   <p>{this.props.horns}</p>
      // </article>
    )
  }
};

export default HornedBeast;