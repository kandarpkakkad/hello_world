import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome User",
        };
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing",
        })
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h1>{message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Message;
