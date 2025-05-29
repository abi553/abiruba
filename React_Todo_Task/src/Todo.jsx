import React, { useState } from 'react'
import './index.css'
function Todo() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Go to College"]);
    const [newTask, setNewTask] = useState();
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">

            <h1>To-do-List</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Enter a task"
                />
                <button className='add-button'
                    onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="task-text">{task}</span>
                        <button
                            className='delete-button'
                            onClick={() => deleteTask(index)}>Delete</button>
                        <button
                            className='move-up-button'
                            onClick={() => moveTaskUp(index)} >Up</button>
                        <button
                            className='move-down-button'
                            onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default Todo