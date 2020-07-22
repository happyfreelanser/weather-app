export default class WeatherServices {
  constructor() {
    this._apiBase = 'http://api.openweathermap.org/data/2.5/weather?';
    this._apiKey = '3927405e2cda717f62b8dfc85c6287dd';
  }

  async getWeather(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    return await res.json();
  }


  async getCityWeather(text){
    const dataWeather = await this.getWeather(`q=${text}&appid=${this._apiKey}&lang=ru`);

    return this._transformDataWeather(dataWeather);
  }

  _transformDataWeather(weather) {
    let name = weather.name, 
        temp = Math.round( weather.main.temp - 273), 
        temp_max = Math.round( weather.main.temp_max - 273), 
        temp_min = Math.round( weather.main.temp_min - 273)

    return {
      name: name,
      temp: temp,
      temp_max: temp_max,
      temp_min: temp_min,
    }
  }
}