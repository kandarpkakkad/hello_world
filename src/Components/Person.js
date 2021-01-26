import React from 'react'

export default function Person({ person }) {
    return (
        <div>
            <h2>Hello! I am {person.name}. I am {person.age} years old.</h2>
        </div>
    )
}
