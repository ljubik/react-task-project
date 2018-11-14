import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TaskForm from './TaskForm';

class FormTask extends Component {
    

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
      
    alert('The value is: ' + this.input.value);
    const task = this.input.value
    e.preventDefault();
    console.log('---','this.input.value')
  }
  
  render() {
    
    return (
        <div className="Container">
           <div className="jumbotron">
           <h1 className ="display-3">
          Список справ
           </h1>
           {/* <form onSubmit={this.handleSubmit}>
            <label>
            Завдання: 
            <input type="text" ref={(input) => this.input = input} />
            </label>
            <input type="submit" value=" Додати" />
           </form> */}
        <TaskForm />
        </div>
       </div> 
    );
  }
}

export default FormTask