import React, { Component } from 'react'

class LifecycleMountChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kandarp',
        }
        console.log("LifecycleMountChild constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleMountChild getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifecycleMountChild componentDidMount")
    }
    

    render() {
        console.log("LifecycleMountChild render")
        return (
            <div>
                Lifecycle Mount Child.
            </div>
        )
    }
}

export default LifecycleMountChild
