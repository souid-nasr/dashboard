import React from 'react'
import axios from 'axios'
import { Button } from '@themesberg/react-bootstrap'
function Course(props) {
    const todolist = props.todolist.map((task,index) => {
        const removeTask = id => {
            axios.delete(`http://localhost:8080/api/courses/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
        return <li key = {index}>
            <div>
                <Button className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}/>
                <Button className = 'close' onClick = {() => {
                    removeTask(task._id)
                }}/>
            </div>
        </li>
    })
    return (
        <div className = 'tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Course