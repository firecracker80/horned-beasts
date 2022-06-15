import React from 'react';
// import Card from './HornedBeast';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//   showModal: false,
//   pickBeast: ''
//   };
  
// };

//   handleOnHide = () => {
//     this.state ({
//     showModal: false
//   });
//   }

//   handleOnShowModal = (Card) => {
//     // let card = data.find(beast => beast.Card===Card);
//     this.setState({
//       showModal: true,
//       pickBeast: Card
//     })
//   }

  render() {
    return (
      <>
      <Modal 
        show={this.props.showModal}
        onHide={this.props.handleOnHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.pickBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img 
          class="img-thumbnail"
          src={this.props.pickBeast.image_url}
          alt={this.props.alt}
          />
          <br/>
          {this.props.pickBeast.description}
          </Modal.Body>
      </Modal>
      </>
    )
  }

}
    export default SelectedBeast;