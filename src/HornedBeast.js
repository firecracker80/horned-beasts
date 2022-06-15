import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: 0
    }
    
  };

likesCampaign = () => {
  this.setState({
    likes: this.state.likes + 1
  })
}
  
  render(){
    
    return(
    <Card style={{ width: '18rem' }} border="success" onClick={() => this.props.handleOnShowModal(this.props.Card)}>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        {this.props.keyword}
        {this.props.horns}
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