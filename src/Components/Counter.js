import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }

    increment() {
        this.setState(
            (prevState, props) => ({
                counter: prevState.counter + 1,
            }),
            () => {
                console.log(this.state.counter);
            }
        );
    }

    decreament() {
        this.setState(
            (prevState, props) => ({
                counter: prevState.counter - 1,
            }),
            () => {
                console.log(this.state.counter);
            }
        );
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decreament()}>Decreament</button>
            </div>
        );
    }
}

export default Counter