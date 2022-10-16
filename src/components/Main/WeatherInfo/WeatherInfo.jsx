import React from "react";

const WeatherInfo = (props) => {
return(
  <div className='wrapperDataWeather'>
    {props.city ?(
      <div className='dataWeather'>
        <p>Temperature: {props.temp} °C</p>
        <p>City: {props.city}, {props.country}</p>
        <p>Humidity: {props.humidity} %</p>
        <p>Pressure: {props.pressure} mm Hg</p>
        <p>Sunrise: {props.sunrise}</p>
        <p>Sunset: {props.sunset}</p>
        <p>Fells like: {props.feels_like} °C</p>
        <p>Description: {props.description}</p>
        <p>Wind speed: {props.wind} m/s</p>
      </div>
    ):(   <p className='infoError'>{props.error}</p>)
    }
     </div>
  )
}

export default WeatherInfo;