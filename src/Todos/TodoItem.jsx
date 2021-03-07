import React,{useState} from 'react';
import classNames from 'classnames';

import style from './Item.module.css';

const TodoItem = ({postId,title,done,handler,search}) =>{
    return <span className={classNames(style.item,{[style.done]: done})}>
            <span> <b>{postId}.</b> <span dangerouslySetInnerHTML={{__html:search(title)}} /></span>
            <span className={classNames(style.doDone,{[style.hidden]: done})} onClick={handler}>&#10007;</span>
        </span>
}

const withTodoItem = (Component) => {
    class withTodoItem extends React.Component{
        constructor(props){
            super(props);

            this.state = {done: this.props.completed};

            this.handler = this.handler.bind(this);
        }

        async handler(){
          await fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.todoId}`, {
            method: 'PATCH',
            body: JSON.stringify({
              completed: true,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
          this.setState({done: true});
        }
      render(){
        return <Component postId ={this.props.postId} title ={this.props.title} 
          done ={this.state.done} search ={this.props.search} handler ={this.handler} />
      }
    }

    return withTodoItem;
}

export default withTodoItem(TodoItem);