import {Task} from "./Todolist";


type Props = {
    fura:Task
};
export const TaskEl = ({fura}: Props) => {
    return (
        <li key={fura.id}>
            <input type="checkbox" checked={fura.isDone}/>
            <span>{fura.title}</span>
        </li>
    );
};