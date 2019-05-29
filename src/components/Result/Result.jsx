import React from 'react';
import StyledResult from './StyledResult';

const Result = ({ city, date, sunrise, sunset, temp, pressure, wind, err }) => {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  return (
  <StyledResult className="result">
    {err ? <p>Nie mamy w bazie {city}</p> :
      <>
        <p>Wyniki wyszukiwania dla miasta <span className="bold">{city}</span></p>
        <p>Dane dla dnia i godziny: {date}</p>
        <p>Aktualna temperatura: {temp} &#176;C</p>
        <p>Wschód słońca dzisiaj o {sunriseTime}</p>
        <p>Zachód słońca dzisiaj o {sunsetTime}</p>
        <p>Aktualne ciśnienie powietrza {pressure}hPa</p>
        <p>Aktualna siła wiatru {wind}m/s</p>
      </>
    }
    </StyledResult>
  );
}


export default Result;
