import React from 'react'
import Person from './Person'

function NameList() {

    
    const persons = [
        {
            id:1,
            name:'bruce',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'clark',
            age:25,
            skill:'angular'
        },
        {
            id:3,
            name:'diana',
            age:28,
            skill:'vue'
        },
    ]
    const personList = persons.map(person => <Person key={person.id} person= {person} />)

    const names = ['bruce', 'clark', 'diana']
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    
    return (
    <div>
        {nameList}
    </div>
    )
}

export default NameList 