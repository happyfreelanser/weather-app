import React, {Component} from 'react';
//import { Select } from 'semantic-ui-react';


export default class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      value: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

      this.props.addCity(this.state.value);
        this.setState({
          value: ''
        })
  }

  render() {

    return(
      <form 
        className="ui fluid icon input"
        onSubmit={this.onSubmit}>
        <input 
          type='text'
          placeholder='Введите название города'
          onChange={this.onValueChange}
          value={this.state.value}
          />
          <button 
            type='submit'
          >
            Показать погоду
          </button>
      </form>
    )  
  }
}


