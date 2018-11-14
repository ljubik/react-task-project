import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import SubTaskAdd from './SubTaskAdd';

class newTask {
  constructor(props) {
    this.name = props.name || 'Some name';
    this.subTask = props.subTask || [];
  }
} 
// Інший спосіб створити обєкт
function newTask1(props) {
    this.name = props.name || 'Some name';
    this.subTask = props.subTask || [];
} 
class TaskForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        taskList: [],
        name: '',
        TaskMin: '',
      };
      this.input = React.createRef();
      this.handleSubTaskSubmit = this.handleSubTaskSubmit.bind(this);
    }
    
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
      
    }
    
    handleShareholderNameChange = (idx) => (event) => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, name: event.target.value };
      });
      
      this.setState({ shareholders: newShareholders });
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      const { name, taskList } = this.state;
      const task = new newTask({
        name: name
      });
      taskList.push(task);
      this.input.current.value = '';
      this.setState({
        name: '',
        taskList: taskList
      })
    }
    
    handleAddShareholder = () => {
      this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }
    
    handleRemoveShareholder = (idx) => () => {
      this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }
    handleSubTaskSubmit(data) {
      console.log(data)
      const {taskId, subName} = data;
      const {taskList} = this.state;
      taskList[taskId].subTask.push({subName: subName});
      console.log(taskList);
      this.setState({taskList:taskList});
    }
    render() {    
      const {taskList} = this.state;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h4>Назва завдання</h4>
            <input required
              type="text"
              name="taskName"
              tabIndex="1"
              placeholder="Task name"
              ref={this.input}
              onChange={this.handleNameChange}
            />
            <button>Save</button>
          </form>
          <h4>Складові завдання</h4>
        
          {taskList.map((task, idx) => (
            <div key={idx} className="shareholder">
              <h4>{task.name}</h4>
              <ul>
              <li><SubTaskAdd taskId={idx} btnLable="Save" onSubmit={this.handleSubTaskSubmit}/></li>
                {task.subTask.map((sub, i) => (<li key={i}>{sub.subName}</li>))}
              </ul>
              {/* <input
                type="text"
                name="MinTask"
                placeholder={`Завдання #${idx + 1}`}
                value={shareholder.name}
                onChange={this.handleShareholderNameChange(idx)}
              />
              <button type="button" tabIndex="20" onClick={this.handleAddShareholder} className="small">Додати завдання</button>
              <button type="button" tabIndex="30" onClick={this.handleRemoveShareholder(idx)} className="small">Видалити завдання</button> */}
            </div>
          ))}
        
        </div>
      )
      
    }
  }
  export default TaskForm