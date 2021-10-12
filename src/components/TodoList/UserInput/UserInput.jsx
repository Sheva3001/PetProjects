import React, {useState} from 'react'

const UserInput = (props) => {

    let [userInput, setUserInput] = useState('')

    // On UserInput change
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    return (
        <div>
            <input type='text' value={userInput} onChange={handleChange}/>
            <button onClick={() => {
                props.addNewTodo(userInput)
                setUserInput('')
            }}>OK</button>
        </div>
    )
}

export default UserInput