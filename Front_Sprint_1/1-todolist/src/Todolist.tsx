import { TaskEl} from "./Task"
import {Button} from "./Button";

type Props = {
    truck: string
    tasks: Task[]
    //tasks:Array<Task>
}

export  type Task = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({truck, tasks}: Props) => {
    // export const Todolist=(props:Props)=>{
    // const shapka=props.shapka
    // const shapka2=props.shapka2
    //const {shapka,shapka2}=props

  const mappedTasks=  !tasks.length ? <div>Empty</div> : tasks.map((el, index) => {
      return (
                <TaskEl {...el} key={el.id}/>
              )
        })

    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <Button title={'ALL'} />
                <Button title={'Active'} />
                <Button title={'Complete'} />
            </div>
        </div>
    )
}



