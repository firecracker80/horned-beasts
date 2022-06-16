import React from 'react';
import SelectedBeast from './SelectedBeast'
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import HornForm from './Form';
import data from './data.json'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pickBeast: '',
      allBeasts: data
    };

  };

  filteredBeast = (newBeasts) => {
    this.setState({allBeasts: newBeasts});
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  }

  handleOnShowModal = (Card) => {
    // let card = data.find(beast => beast.Card===Card);
    this.setState({
      showModal: true,
      pickBeast: Card
    })
  }

  render() {
    return (
      <>
        <Header />
        <HornForm
        filteredBeast = {this.filteredBeast}
        allBeasts = {this.state.allBeasts}/>
       
        <Main
          // data={data}
          handleOnShowModal={this.handleOnShowModal}
          allBeasts = {this.state.allBeasts} />
        <SelectedBeast
          showModal={this.state.showModal}
          pickBeast={this.state.pickBeast}
          handleOnHide={this.handleOnHide} />
        <Footer />
      </>
    )
  }

}

export default App;
