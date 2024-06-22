import React from "react";


type NewComponentType = {
    listCars: CarsType[]
}
type CarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = ({listCars}: NewComponentType) => {

    return (

        <table>
            {
                listCars.map((el, index) => {
                    return (
                        <tr>
                            <th key={index}>{el.manufacturer}</th>
                            <td key={index}>{el.model}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}