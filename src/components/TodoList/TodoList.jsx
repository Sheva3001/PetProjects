import React, {useState} from 'react'
import TodoItems from "./TodoItems/TodoItems";
import UserInput from "./UserInput/UserInput";
import s from "./TodoList.module.css"

const TodoList = (props) => {

    let [todos, setTodos] = useState([])

    // Add New Task
    const addNewTodo = (userInput) => {
        if(userInput) {
            let newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                isComplete: false
            }
            setTodos([...todos, newItem])
        }
    }

    // Delete Task
    const deleteTask = (id) => {
        setTodos([...todos.filter( item => item.id !== id )])
    }

    // Complete Task
    const  completeTask = (id) => {
        setTodos([
            ...todos.map( (item) => {
                return item.id === id ? { ...item, isComplete: !item.isComplete } : {...item}
            })
        ])
    }

    return (
        <div className={s.todoList}>
            <h1>TodoList</h1>
            <UserInput addNewTodo={addNewTodo} />
            <TodoItems todoItems={todos} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
    )
}

export default TodoList