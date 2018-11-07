import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

//class App extends Component {
 
//   render(){
//   return(
//       <div className="Container">
//           <div className="jumbotron">
//           <h1 className ="display-3">
//           Список справ
//           </h1>
//           <input></input>
//           <TestInput />
//           <button onClick={this.handleCLick} className="btn" >ADD</button>
//           </div>
//       </div> 
//   )
//   }
// }


class FormTask extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormTask