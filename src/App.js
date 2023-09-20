import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim() !== '') {
            setTasks([...tasks, taskText]);
            setTaskText('');
        }
    };

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    };

    return (
        <div>
            <h1>Список задач</h1>
            <div>
                <input
                    type="text"
                    placeholder="Добавить задачу"
                    value={taskText}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>Добавить</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
