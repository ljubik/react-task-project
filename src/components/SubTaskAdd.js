import React, {Component} from 'react';

class SubTaskAdd extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddShareholder = this.handleAddShareholder.bind(this)
        this.input = React.createRef();
        this.state = {
            subName: ''
        };
        
    }
    handleAddShareholder() {
     const {onSubmit, taskId} = this.props;
     console.log("handleAddShareholder", this.state)
     if(typeof onSubmit === "function") {
        onSubmit({
            subName: this.state.subName,
            taskId: taskId
        });
     }
        this.input.current.value = '';
        this.setState({
            subName: ''
        })
    }
    handleChange(event) {
        this.setState({
            subName: event.target.value
        })
    }
    render() {
        const label = this.props.btnLable || "Додати завдання"
        return (<div><input
            type="text"
            ref={this.input}
            name="MinTask"
            placeholder={`Завдання`}
            onChange={this.handleChange}
          /><button type="button" tabIndex="20" onClick={this.handleAddShareholder} className="small">{label}</button></div>)
    }
}

export default SubTaskAdd;