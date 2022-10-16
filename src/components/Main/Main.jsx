import React from "react";
import Form from "./Form/Form";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import photoWeather from "../../assets/img/photoWeather.jpg";

const API_KEY = "27b7e68c367cbfb0d39414c60b2a2e5d";

class Main extends React.Component {
  state = {
    city: "",
    country: "",
    pressure: "",
    humidity: "",
    sunrise: "",
    sunset: "",
    feels_like: "",
    description: "",
    wind: "",
    error: "",
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if (!city) {
      this.setState({
        temp: "",
        city: "",
        country: "",
        pressure: "",
        humidity: "",
        sunrise: "",
        sunset: "",
        feels_like: "",
        description: "",
        wind: "",
        error: "Enter a city",
      });
    } else {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);

      if (data.cod == 404) {
        this.setState({
          error: "City was not found",
        });
        return;
      }

      let sunrise = data.sys.sunrise * 1000;
      let date1 = new Date();
      date1.setTime(sunrise);
      let sunrise_date = date1.toLocaleTimeString();

      let sunset = data.sys.sunset * 1000;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.toLocaleTimeString();

      let pressure = data.main.pressure;
      let pressureInMmHg = Math.floor(pressure * 0.75006);

      let temp = data.main.temp;
      let tempRound = Math.floor(temp);

      let feels_like = data.main.feels_like;
      let feelsLike = Math.round(feels_like);

      this.setState({
        temp: tempRound,
        city: data.name,
        country: data.sys.country,
        pressure: pressureInMmHg,
        humidity: data.main.humidity,
        sunrise: sunrise_date,
        sunset: sunset_date,
        feels_like: feelsLike,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: "",
      });
    }
  };

  render() {
    const onDelete = () => {
      this.setState({
        temp: "",
        city: "",
        country: "",
        pressure: "",
        humidity: "",
        sunrise: "",
        sunset: "",
        feels_like: "",
        description: "",
        wind: "",
      });
    };
    return (
      <div className="wrapperWeatherInfo">
        <img src={photoWeather} className="" alt="" />
        <div className="weatherInfo">
          <h2>Weather in your city</h2>
          <div>
            <Form weatherMethod={this.gettingWeather} onDelete={onDelete} />
            <WeatherInfo
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              feels_like={this.state.feels_like}
              description={this.state.description}
              wind={this.state.wind}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
