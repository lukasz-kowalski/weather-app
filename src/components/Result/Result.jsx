import React from 'react';
import StyledResult from './StyledResult';

const Result = ({ city, date, sunrise, sunset, temp, pressure, wind, err }) => {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  return (
  <StyledResult className="result">
    {err ? <p>There is no {city} in database</p> :
      <>
        <p>Results for <span className="bold">{city}</span> city</p>
        <p>Data for day and time: {date}</p>
        <p>Temperature: {temp} &#176;C</p>
        <p>Sunrise on {sunriseTime}</p>
        <p>Sunset on {sunsetTime}</p>
        <p>Air pressure {pressure}hPa</p>
        <p>Wind speed {wind}m/s</p>
      </>
    }
    </StyledResult>
  );
}


export default Result;
