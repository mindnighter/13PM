import React from 'react';
import style from './Retrospective.module.css';
import Comment from './Comment';

class Block extends React.Component{
  constructor(props){
    super(props);

    this.state = {data: [],display: true};

    this.addHandler = this.addHandler.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.drop = this.drop.bind(this);
  }

  drop(e){
    e.preventDefault();
    const dragData = e.dataTransfer.getData("data").split(",");
    console.log(dragData);
    const { data = [] } = this.state;
    data.push({key: performance.now(),text:dragData[0],date: +dragData[3],
      positive:dragData[1],negative:dragData[2],edit:false});
    this.setState({data: data});
  }

  allowDrop(e){
    e.preventDefault();
  }

  update(string,id){
    const { data = [] } = this.state;
    data[id].text = string;
    this.setState({data: data,display: true});
  }

  delete(id){
    const { data = [] } = this.state;
    data.splice(id, 1);
    this.setState({data: data,display: true});
  }

  addHandler(){
    const { data = [] } = this.state;
    data.push({key: performance.now(),text:'',date: Date.now(),
      positive:0,negative:0,edit:true});
    this.setState({data: data,display: false});
  }

  like(id){
    const { data = [] } = this.state;
    data[id].positive += 1;
    this.setState({data: data});
  }

  dislike(id){
    const { data = [] } = this.state;
    data[id].negative += 1;
    this.setState({data: data});
  }

  shouldComponentUpdate(nextProps, nextState){
    const { data = [] } = this.state;
    data.sort((a,b)=>{
      const first = (a.positive - a.negative);
      const second = (b.positive - b.negative);
      return first - second;
    });
    nextState = data;
    return true;
  }

    render() {
      return (
        <div 
          onDrop ={this.drop}
          onDragOver ={this.allowDrop}
          className ={`${style.block} ${style[this.props.color]}`}>

          <span className ={style.title}>{this.props.title}: {this.state.data.length}</span>

          <button hidden = {!this.state.display}
            className ={style.addbutton}
            onClick ={this.addHandler}>
              +
          </button>

          <div className ={style.cards} >
            {this.state.data.map((item,id)=>{
              return <Comment
                key ={item.key}
                data ={item}
                id ={id}
                update ={this.update}
                delete ={this.delete}
                like ={this.like}
                dislike ={this.dislike}
              />
            })}
          </div>

        </div>
      );}
    
}

export default Block;