"use client"

import { useState } from "react";
import styles from "./to_do_list.module.css";

export default function to_do_list() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setText(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const newTask = {
          id: Date.now(),
          text
        }
        setTasks([...tasks, newTask])
        setText('');
    }
    
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <main className={styles.to_do_listPage}>
            <h2>TODO LIST</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ваша задача..." value={text} onChange={handleChange} required />
                <button>+</button>
            </form>

            {tasks.map(task => (
                <div key={task.id}  >
                    <span>{task.text}</span>
                    <button onClick={() => deleteTask(task.id)}>-</button>
                </div>
            ))}
        </main>
    )
}