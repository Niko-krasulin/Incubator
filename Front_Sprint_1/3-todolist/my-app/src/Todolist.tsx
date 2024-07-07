import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {useRef, useState, KeyboardEvent, ChangeEvent} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (value: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask,}: PropsType) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const [newTitle, setNewTitle] = useState('')

    // const changeFilterAll =  () => {
    //     changeFilter('all')
    // }
    //
    // const changeFilterActive = () => {
    //     changeFilter('active')
    // }
    //
    // const changeFilterCompleted = () => {
    //      changeFilter('completed')
    // }
    const changeFilterHandler = (value: FilterValuesType) => changeFilter(value)




    const taskFooHandler = () => {
        addTask(newTitle)
        setNewTitle('')
    }


    const addTaskHandler = () => {
        taskFooHandler()
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            taskFooHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const mappedTasks = tasks.map(task => {
            const removeTaskClickHandler = (taskId: string) => removeTask(taskId)
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button title={'x'} onClick={() => removeTaskClickHandler(task.id)}/>
                </li>
            )
        })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTitle}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                />
                {/*<Button title={'+'} onClick={addTask}/>*/}
                <Button title={'+'} onClick={taskFooHandler}/>
            </div>
            {/*<div>*/}
            {/*	<input ref={inputRef}/>*/}
            {/*	/!*<Button title={'+'} onClick={addTask}/>*!/*/}
            {/*	<Button title={'+'} onClick={()=> {*/}
            {/*		if (inputRef.current) {*/}
            {/*			addTask(inputRef.current.value)*/}
            {/*			inputRef.current.value = ''*/}
            {/*		}*/}
            {/*	}}/>*/}
            {/*</div>*/}
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {mappedTasks}
                    </ul>
            }
            <div>
                <Button title={'All'} onClick={() => changeFilterHandler('all')}/>
                <Button title={'Active'} onClick={() => changeFilterHandler('active')}/>
                <Button title={'Active'} onClick={() => changeFilterHandler('completed')}/>

                {/*<Button title={'All'} onClick={() => changeFilter('all')}/>*/}
                {/*<Button title={'Active'} onClick={() => changeFilter('active')}/>*/}
                {/*<Button title={'Completed'} onClick={() => changeFilter('completed')}/>*/}
            </div>
        </div>
    )
}
