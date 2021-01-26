import React from "react";
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Kandarp",
            age: 22
        },
        {
            id: 2,
            name: "Mili",
            age: 17
        },
        {
            id: 3,
            name: "Bhavesh",
            age: 52
        },
        {
            id: 4,
            name: "Priti",
            age: 48
        }
    ];
    const personList = persons.map((person, index) => (<Person key={index} person={person} />));
    return <div>{personList}</div>;
}

export default NameList;
