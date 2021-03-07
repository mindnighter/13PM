import React,{useState} from 'react';

import style from './Todos.module.css';

const Search =({startSearch}) =>{

    let [value, setValue] = useState('');

    const getSearch =(e) =>{
        setValue(value = e.target.value);
    }

    const search =() =>{
        startSearch(value)
    }
    
    return <div className ={style.form}>
            <input onChange ={getSearch} type="text" />
            <input onClick ={search} type="submit" value="Search" />
        </div>
}

export default Search;
