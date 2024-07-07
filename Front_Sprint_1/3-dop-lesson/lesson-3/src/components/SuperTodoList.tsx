import {ReactNode} from "react";

type Props = {
    croses:CroseProps[]
    children?: ReactNode
};

type CroseProps={
    id: number
    model: string
    size: string
}
export const SuperTodolist = (props: Props) => {
    const {croses,children}=props
    return (
        <div>
            <ol>
                {croses.map(el=>{
                    return(
                        <li>
                            <span>{el.id}</span>
                            <span>{el.size}</span>
                            <span>{el.model}</span>
                        </li>
                    )
                })}
            </ol>
            {children}
            <hr/>
        </div>
    );
};