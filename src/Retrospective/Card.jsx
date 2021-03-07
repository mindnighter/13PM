import React from 'react';
import style from './Retrospective.module.css';

class Card extends React.Component{
    constructor(props){
        super(props);

        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
        this.drag = this.drag.bind(this);
        this.delete = this.delete.bind(this);
    }

    drag(e){
        const {text,positive,negative,date} = this.props.data
        e.dataTransfer.setData("data", [text,positive,negative,date] );
    }

    delete(){
        this.props.delete(this.props.id);
    }

    like(){
        this.props.like(this.props.id);
    }
  
    dislike(){
        this.props.dislike(this.props.id);
    }

    render(){
        const options = {year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "2-digit", second:"2-digit"};
        const date = new Date(this.props.data.date).toLocaleDateString("en-GB",options);
        const like = this.props.data.positive;
        const dislike = this.props.data.negative;
        return (
            <div className ={style.form} draggable = "true" 
                onDragStart ={this.drag} onDragEnd={this.delete}>

                <div>{date}</div>

                <div className ={style.comment}>{this.props.data.text}</div>

                <div className ={style.items}>

                    <span className ={style.rating}>
                        {like}<span onClick={this.like} className={style.likedis}>&#128402;</span>
                        <span onClick ={this.dislike} className={style.likedis}>&#128403;</span> {dislike}
                    </span>

                    <button onClick={this.props.update} className={style.change}>&#9998;</button>
                </div>
            </div> 
        )
    }
}

export default Card;