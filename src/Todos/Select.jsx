import style from './Todos.module.css';

const Select = ({select,users}) =>{
    return <select onChange ={select} className={style.list}>
    {users.map(({id,name})=>{
        return <option value={id} key ={id}>{name}</option> 
    })}
</select>
}
export default Select;