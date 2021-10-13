import React, {useState} from 'react'
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoItems.module.css"
import TodoFooter from "../TodoFooter/TodoFooter";

const TodoItems = (props) => {

    let [radio, setRadio] = useState('all')

    // Create task (used in map)
    const createItem = (item) => {
        return (
            <li key={item.id}>
                <TodoItem task={item.task}
                          id={item.id}
                          isComplete={item.isComplete}
                          deleteTask={props.deleteTask}
                          completeTask={props.completeTask}
                          editTask={props.editTask}/>
            </li>
        )
    }

    // Creates an array of items by category
    const createItemsArray = (type) => {
        switch (type) {
            case 'all':
                return props.todoItems.map(item => { return createItem(item)})
            case 'active':
                return props.todoItems.filter( item => !item.isComplete ).map(item => {return createItem(item)})
            case 'completed':
                return props.todoItems.filter( item => item.isComplete ).map(item => {return  createItem(item)})
        }
    }

    let todoItemsArray = createItemsArray(radio)

    return (
        <ul className={s.todoItems}>
            {todoItemsArray}
            <TodoFooter itemsLeft={todoItemsArray.length}
                        todoItemsArray={todoItemsArray}
                        radio={radio}
                        setRadio={setRadio}
                        deleteCompleted={props.deleteCompleted}/>
        </ul>
    )
}

export default TodoItems