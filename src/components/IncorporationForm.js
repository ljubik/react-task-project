import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'


class IncorporationForm extends React.Component {


    constructor() {
      super();
      this.state = {
        name: '',
        shareholders: [{ task: '', name:''  }],
        TaskMin: '',
      };
    }
    
    handleNameChange = (evt) => {
      this.setState({ name: evt.target.value });
      
    }
    
    handleShareholderNameChange = (idx) => (evt) => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder, name: evt.target.value };
      });
      
      this.setState({ shareholders: newShareholders });
    }
    
    handleSubmit = (evt) => {
      const { name, shareholders, task } = this.state;
      
      
      alert(`Завдання: ${name} , складові ${shareholders.length} , ${task}`);
    }
    
    handleAddShareholder = () => {
      this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }
    
    handleRemoveShareholder = (idx) => () => {
      this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }
    
    render() {    
      return (
        <form onSubmit={this.handleSubmit}>
          <h4>Назва завдання</h4>
          <input required
            type="text"
            name="MaxTask"
            tabindex="1"
            placeholder="Купити продукти, зремонтувати телевізор і т.д."
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        
          <h4>Складові завдання</h4>
        
          {this.state.shareholders.map((shareholder, idx) => (
            <div className="shareholder">
              <input
                type="text"
                name="MinTask"
                tabindex="2"
                placeholder={`Завдання #${idx + 1}`}
                value={shareholder.name}
                onChange={this.handleShareholderNameChange(idx)}
              />
              <button type="button" tabindex="20" onClick={this.handleAddShareholder} className="small">Додати завдання</button>
              <button type="button" tabindex="30" onClick={this.handleRemoveShareholder(idx)} className="small">Видалити завдання</button>
            </div>
          ))}
          
          <button tabindex="50" onClick={this.handleCLick}>Внести</button>
        </form>
        
      )
      
    }
  }
  export default IncorporationForm