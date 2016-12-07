import * as React from 'react';
export default ({todos})=>{
    console.log("todolist render")
    return (
        <ul>{todos.map(todo=>{return (<li key={todo.id}>{todo.text}</li>)})}</ul>
    )
}