import React, {useState} from 'react'
import s from "./TodoItem.module.css"

const TodoItem = (props) => {

    let [taskEdit, setTaskEdit] = useState({
        isEdit: false,
        newTaskText: props.task
    })

    const handleChange = (e) => {
        setTaskEdit({...taskEdit, newTaskText: e.target.value})
    }

    const toggleEditMode = () => {
        taskEdit.isEdit
            ? setTaskEdit({...taskEdit, isEdit: false})
            : setTaskEdit({...taskEdit, isEdit: true})
    }

    if(taskEdit.isEdit) {
        return (
            <div className={s.todoItem}>
                <button className={`${s.completeBtn} ${s.taskComplete}`} onClick={ () => {
                    props.editTask(props.id, taskEdit.newTaskText)
                    toggleEditMode() }}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="405.272px" height="405.272px" viewBox="0 0 405.272 405.272" enable-background="new 0 0 405.272 405.272;">
                        <g>
                            <path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
                                c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
                                c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
                        </g>
                    </svg>

                </button>
                <input className={s.input} placeholder='Create a new todo...' type='text' value={taskEdit.newTaskText} onChange={handleChange} />
                <button className={s.deleteBtn} onClick={() => {
                    setTaskEdit({...taskEdit, newTaskText: ''})
                }}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                                <path
                                    d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        )
    } else {
        return (
            <div className={s.todoItem}>
                <button className={`${s.completeBtn} ${props.isComplete ? s.taskComplete : ''}`} onClick={ () => { props.completeTask(props.id) }}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="120px" height="120px" viewBox="0 0 120 120" enable-background="new 0 0 120 120">
                        <circle cx="60" cy="60.834" r="54.167"/>
                    </svg>
                </button>
                <div className={`${s.task} ${props.isComplete ? s.onTaskComplete : ''}`}>{props.task}</div>
                <button className={s.editBtn} onClick={() => {
                    toggleEditMode()
                }}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 330 330" enable-background="new 0 0 330 330">
                        <g id="XMLID_23_">
                            <path id="XMLID_24_" d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165
                            c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165
                            C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z"/>
                            <path id="XMLID_27_" d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15
                            C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"/>
                        </g>
                    </svg>
                </button>
                <button className={s.deleteBtn} onClick={() => {
                    props.deleteTask(props.id)
                }}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                                <path
                                    d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        )
    }
}

export default TodoItem