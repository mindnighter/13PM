import React from 'react';
import style from './Todos.module.css';

const Add = ({getValue,add}) =>{
    const addInput = React.createRef();

    const handler = () =>{
        addInput.current.value = '';
        addInput.current.focus();
        add();
    }

    return <div className ={style.form}>
            <input onChange ={getValue} type="text" ref={addInput} />
            <input onClick ={handler} type="submit" value="Add" />
        </div>
}
export default Add;