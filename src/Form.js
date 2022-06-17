import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import data from './data.json'

let hornArr = [1, 2, 3, 100];

class HornForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: '',
      sortedHorn: '',
      selectHorn: hornArr
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let horn = event.target.value;
    this.setState({
      sortedHorn: horn
    });
    
  };

  // handleInput = (event) => {
  //   let horn = event.target.;
  //   this.setState({
  //     horns: horn
  //   });
  // }
  handleChange = event => {
    this.setState({
      selectHorn:  event.target.value
    });  
    this.handleHorn(ev      ent.target.value);
    console.log(event.target.value);
  }
  handleHorn = (hornNum) => {

    if (hornNum === "all") {
      this.props.filteredBeast(data);
    } else {
      
      let filtHornArr = data.filter(beast => beast.horns === parseInt(hornNum));
      this.props.filteredBeast(filtHornArr)
      console.log(filtHornArr);
      }
    // let horn = event.target.value;
    // console.log(horn);
    // if (horn == '1') {
    //   console.log(filtHornArr);
    //   let pickHorn = hornArr.filter(num => num % 2 === 0);
    //   this.setState({
    //     selectHorn: 1
    //   });
    // } else if (horn === 'odd') {
    //   let pickHorn = hornArr.filter(num => num % 2 === 1);
    //   this.setState({
    //     selectHorn: pickHorn
    //   });
    // } else {
    //   this.setState({
    //     selectHorn: hornArr
    //   });
    // }
    // console.log(horn);
  }

  render() {

    return (
      <>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3 m-2">
            <p>Filter by number of horns.</p>
            <Form.Select className="form-select-sm " horn="horns" onChange={this.handleChange}>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
        </Form.Group>
        <Button 
          variant="warning" 
          className="mt-3"
          type="submit">Submit</Button>
      </Form>
      </>
    )
  }
};

export default HornForm;