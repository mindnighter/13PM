import React from 'react';

import style from './Todos.module.css';

import TodoItem from './TodoItem';
import Search from './Search';
import Select from './Select';
import Add from './Add';

class Todos extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {users: [], posts: [], isLoaded: false, id: 1, value: '', userPosts: [], search: ''};

        this.addInput = React.createRef();

        this.select = this.select.bind(this);
        this.add = this.add.bind(this);
        this.search = this.search.bind(this);
        this.getValue = this.getValue.bind(this);
        this.startSearch = this.startSearch.bind(this);
    }

    async componentDidMount() {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json());
        const posts = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json());

        this.setState(()=>{return{
            users: users, 
            posts: posts, 
            isLoaded: true, 
            userPosts: posts.filter(post => post.userId ==  this.state.id)
        }})
    }

    select(e){
        this.setState(()=>{return{
            id: e.target.value, 
            userPosts: this.state.posts.filter(post => post.userId ==  e.target.value)
        }})
    }

    getValue(e){
        this.setState({value: e.target.value});
    }

    startSearch(value){
        this.setState({search: value});
    }

    search(text){
        return text.replace(new RegExp(this.state.search,'g'),`<strong>${this.state.search}</strong>`);
    }

    async add(){
        const { userPosts = [] } = this.state;

        const item = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.value,
                completed: false,
                userId: this.state.id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json());
        item.id = performance.now(); // always same id

        userPosts.push(item);

        this.setState({userPosts: userPosts, value: ''});
    }

    render() {
       if(this.state.isLoaded){
            return (
                <React.Fragment>
                    <div className ={style.options}>
                        <Select select ={this.select} users ={this.state.users} />
                        
                        <Add getValue ={this.getValue} add ={this.add} />

                        <Search startSearch = {this.startSearch} />

                    </div>
                    
                    <div className={style.posts} key={performance.now()} ref={this.postsSearch}>
                        {this.state.userPosts.map(({id,title,completed},i)=>{
                            return <TodoItem search={this.search} key ={id} todoId ={id} postId ={i+1} title ={title} completed={completed} />
                        })}
                    </div>
                </React.Fragment>
                )
       } else{
        return <div>Loading...</div>
       }
    }
}

export default Todos;