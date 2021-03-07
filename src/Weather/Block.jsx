import React from 'react';
import rightDate from './RightDate';
import IMG from './IMG';

class Block extends React.Component{
    render() {
      let {day,date,minTemperature,maxTemperature,pressure,humidity,velocity,direction,description} = this.props.data;
      date = rightDate(date);
    if(minTemperature >0){
      minTemperature = `+${minTemperature}`;
    }
    if(maxTemperature >0){
      maxTemperature = `+${maxTemperature}`;
    }
      return (
        <div className="weather__block">
          <div className="day">{day}</div>
          <div className="date">{date}</div>
          <div className="description">{IMG[description]}</div>
          <div className="temperature">
            <span className="min">{minTemperature} °C</span>
            <span className="max">{maxTemperature} °C</span>
          </div>
          <div className="pressure">{IMG["Pressure"]}Pressure: <br /> {pressure} mbar</div>
          <div className="humidity">Humidity: {humidity}%</div>
          <div className="progress" style={{width:`${humidity/1.1}%`}}></div>
          <div className="wind">Wind: {velocity} m/s {IMG[direction]}</div>
        </div>
    );} 
}

export default Block;