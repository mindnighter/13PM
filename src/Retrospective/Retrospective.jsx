import React from 'react';
import Block from './Block';
import style from './Retrospective.module.css';

class Retrospective extends React.Component{
  render() {
    return (
      <div className ={style.wraper}>
        <Block title = "Good things" color = "green" />
        <Block title = "Bad things" color = "red" />
        <Block title = "Action items" color = "blue" />
      </div>
    );
  }
}

export default Retrospective;
