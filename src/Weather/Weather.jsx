import React from 'react';
import Block from './Block.jsx';
import './weather.css';

class Weather extends React.Component{
  render() {
    const data = [
      {day:"Monday",date:"31/02/2021",minTemperature:3000,maxTemperature:3333,pressure:772,humidity:100,velocity:1,direction:"North",description:"Sunny"},
      {day:"Tuesday",date:"13/02/1999",minTemperature:-4,maxTemperature:3,pressure:228,humidity:0,velocity:2,direction:"North-east",description:"Cloudy"},
      {day:"Wednesday",date:"28/01/2021",minTemperature:-5,maxTemperature:3,pressure:0,humidity:10,velocity:12,direction:"East",description:"Cloudy-Sunny"},
      {day:"Thursday",date:"30/04/2021",minTemperature:-13,maxTemperature:3,pressure:1234,humidity:20,velocity:100,direction:"South-east",description:"Windy"},
      {day:"Friday",date:"01/12/2021",minTemperature:-0,maxTemperature:0,pressure:2000,humidity:30,velocity:1000,direction:"South",description:"Rain"},
      {day:"Saturday",date:"21/06/2021",minTemperature:-30,maxTemperature:33,pressure:444,humidity:40,velocity:5,direction:"South-west",description:"Snowy-Wet"},
      {day:"Sunday",date:"19/10/2021",minTemperature:-273.15,maxTemperature:-228,pressure:555,humidity:50,velocity:9,direction:"West",description:"Snowy"}
    ]
    return (
      <div className="weather">
        {data.map((item)=>{
          return <Block
          key = {performance.now()}
          data = {item}
          />
        })} 
      </div>
    );
  }
}

export default Weather;
