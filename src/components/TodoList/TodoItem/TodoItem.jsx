import React from 'react'

const TodoItem = (props) => {

    return (
        <div>
            <div>{props.task} {props.isComplete && 'COMPLETE'}</div>
            <button onClick={ () => { props.deleteTask(props.id) }}>Delete</button>
            <button onClick={ () => { props.completeTask(props.id) }}>Complete</button>
        </div>
    )
}

export default TodoItem