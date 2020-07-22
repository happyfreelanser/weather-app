import React, { Component } from 'react';
import './select.css';
import { Link } from "react-router-dom";


export default class SelectCity extends Component {
  constructor(props) {
    super(props);



      this.listCity = this.listCity.bind(this);
  }


  listCity(arr) {
    return arr.map((item) => {
      const {value, key} = item;

        return (
          <Link to={`${value}`}
            className='select-item'
            key={key}
            onClick={() => {this.props.selectCity(value)}}
          >
            {value}
          </Link>
        )
      }) 
  }

  render() {
    const items = this.listCity(this.props.cityOptions);

    return(
      <div 
        className='select-wrap'
        onClick={() => this.setState({class: true})}
      >
        <p>Выбрать город	&#8744;</p>
        {items}
      </div>
    )
  }
} 