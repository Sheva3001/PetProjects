import React from 'react'
import TodoItem from "../TodoItem/TodoItem";

const TodoItems = (props) => {
    const todoItemsArray = props.todoItems.map(item => {
        return (
            <li key={item.id}>
                <TodoItem task={item.task}
                          id={item.id}
                          isComplete={item.isComplete}
                          deleteTask={props.deleteTask}
                          completeTask={props.completeTask}/>
            </li>
        )
    })
    return (
        <ul>
            {todoItemsArray}
        </ul>
    )
}

export default TodoItems