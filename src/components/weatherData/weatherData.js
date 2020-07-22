import React, {Component} from 'react';
import './weatherData.css';

export default class WeatherData extends Component {

  render() {
    const {name, temp, temp_max, temp_min, error} = this.props.weather;

    return(

      <div>
        { name !== undefined && 
          <div>
            <h1 className='city-name' >{name}</h1>
            <h2 className='city-temp' >{temp}&#186;С</h2>
            <div className='city-temp-wrap'>
              <span className='city-temp-max'>MAX &#8212;{temp_max}&#186;С</span>&#8195;&#8195;
              <span className='city-temp-min'>MIN &#8212;{temp_min}&#186;С</span>
            </div>
          </div>
        }
        { error &&
          <p>{error}</p>
        }
      </div>
       
    )
  }
}