import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import LocationForm from '../locationForm/locationForm';
import WeatherServices from '../../services/weatherServices';
import WeatherData from '../weatherData/weatherData';
import SelectCity from '../select/select';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {
        name: undefined,
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        error: undefined
      },
      cityOptions: [
        { key: 'od', value: 'Одесса' },
        { key: 'kiev', value: 'Киев' },
        { key: 'lv', value: 'Львов' }
      ],

      
    }

    this.viewCity = this.viewCity.bind(this);
  }

  WeatherServices = new WeatherServices();

  async viewCity(text) {
    let city = await text;
    this.WeatherServices.getCityWeather(city)
        .then(
          (weather) => {
            this.setState({
                weather: {
                  name: weather.name,
                  temp: weather.temp,
                  temp_max: weather.temp_max,
                  temp_min: weather.temp_min,
                }
            })
          },
          (weather) => {
            this.setState({
              weather: {
                error: 'Введите пожалуйста название города'
              }
            })
          }
        )
  }   
   
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/'>
            <Grid container>
              <Grid.Row columns={3} centered>
                <Grid.Column>
                  <LocationForm 
                    addCity={this.viewCity}
                  />
                </Grid.Column>
                <Grid.Column>
                <SelectCity
                  cityOptions = {this.state.cityOptions}
                  selectCity={this.viewCity}
                />
                </Grid.Column>
                <Grid.Column>
                 <Link to='/'>Главная</Link>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column textAlign='center' width={5}>
                  <WeatherData 
                    weather={this.state.weather}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Route>
        </Switch>
      </Router>
    );
  }

}
 