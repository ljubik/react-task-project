import React, {Component} from 'react';

class BtnTeg extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state={
      email: ''
    }
  }

  handleSubmit(event) {
    alert('The value is: ' + this.state.email);
    event.preventDefault();
    console.log('form submitted and email value is', this.state.email);
  }
  handleEmailChange(event) {
    console.log('handleEmailChange', this);
    this.setState({email: event.target.value});
  }


    render() {
        return (
          <form name="formaBtn" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input 
              type="text" 
              name="textPole" 
              ref= {(input) => this.input = input}
              value={this.state.email}
              onChange={this.handleEmailChange}
              />
            </label>
            <button type="submit" value="Submit">SEND</button>
          </form>
        );
  }
}


export default BtnTeg