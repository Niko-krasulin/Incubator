type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: TechType[]
}
type TechType = {
    id: number
    title: string
}

type LocalCityType ={
    title: string
    country: string
}

type addressType = {
    streetTitle: string
    city: LocalCityType
}



const student:StudentType = {
    name: 'yo',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Baykalskay',
        city: {
            title: 'irkutsk',
            country: 'Russia'
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title: "CSS"
        },
        {
            id:3,
            title: "JS"
        }
    ]

}


console.log(student.age)
console.log(student.name)
console.log(student.address)
console.log(student.technologies[2].title)