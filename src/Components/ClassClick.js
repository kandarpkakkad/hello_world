import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked from class.");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick
