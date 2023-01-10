import React from "react";
import { useState } from "react";

export default function NewTask(props) {
    const [NewTask, setNewTasks] = useState('')

    const ValueInput = (event) => {
        setNewTasks(event.target.value)
    }
    const handelAdd = () => {
        props.handelAdd(NewTask)
    }
    return (
        <div>
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input onChange={ValueInput} type="text" id="myInput" placeholder="Title..." />
                <button>Search</button>
                <span onClick={handelAdd} className="addBtn">
                    Add
                </span>
            </div>
        </div>
    );
}