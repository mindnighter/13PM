import React from 'react';
import style from './Retrospective.module.css';
import Card from './Card';

class Comment extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {accepted: !this.props.data.edit, value: this.props.data.text};

        this.handlerAccept = this.handlerAccept.bind(this);
        this.handlerCancel = this.handlerCancel.bind(this);
        this.getValue = this.getValue.bind(this);
        this.handlerUpdate = this.handlerUpdate.bind(this);
      }

    handlerUpdate(){
      this.setState({accepted: false});
    }

    getValue(e){
      this.setState({value: e.target.value});
    }

    handlerAccept(){
      this.props.update(this.state.value,this.props.id);
      this.setState({accepted: true});
    }

    handlerCancel(){
      this.props.delete(this.props.id);
    }

    render() {
        if(this.state.accepted){
            return <Card
              id ={this.props.id}
              data ={this.props.data}
              update ={this.handlerUpdate}
              like ={this.props.like}
              dislike ={this.props.dislike}
              delete ={this.props.delete}
            />
        } else{
            return (
                <div className={style.form}>

                    <textarea 
                      onChange = {this.getValue}
                      defaultValue = {this.props.data.text}
                      className={style.area} >
                    </textarea>

                    <div className={style.buttons}>
                        <button onClick={this.handlerAccept} className={style.accept}>&#10003;</button>
                        <button onClick={this.handlerCancel} className={style.cancel}>&#10007;</button>
                    </div>

                </div>
                );
        }
      }
}

export default Comment;