import React, {useState} from "react";

export type ManType = {

    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}


export type PropsType = {
    title: string
    man: ManType
    food:Array<string>
    car: {model:string}
}

function useDimychState(m: string) {
    return [m,function () {}]
}
function useDimychState2(m: string) {
    return {message: m, setMessage: function () {}}
}

export const ManComponent = ({title,man, ...rest}:PropsType) => {


    const [message, setMessage] = useState('hello')


    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {rest.car.model}
        </div>


    </div>
}