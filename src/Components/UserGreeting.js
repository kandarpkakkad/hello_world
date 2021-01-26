import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false,
        }
    }
    

    render() {
        const {isLoggedIn} = this.state;

        return (
            isLoggedIn?
            <div>Welcome Kandarp.</div> :
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
