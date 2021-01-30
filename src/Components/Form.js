import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.username
        })
    }

    render() {
        return (
            <form>
                <div>
                    <label for="username">Username: </label>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleUsernameChange} />
                </div>
            </form>
        )
    }
}

export default Form
