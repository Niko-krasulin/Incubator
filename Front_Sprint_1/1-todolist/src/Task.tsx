import React from "react";
import {Task} from "./Todolist";


export const TaskEl = ({id, title, isDone}: Task) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span></li>
    )
}

