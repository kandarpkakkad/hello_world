import React, { Component } from 'react'
import LifecycleMountChild from './LifecycleMountChild'

class LifecycleMount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kandarp',
        }
        console.log("LifecycleMount constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleMount getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifecycleMount componentDidMount")
    }
    

    render() {
        console.log("LifecycleMount render")
        return (
            <div>
                <div>Lifecycle Mount.</div>
                <LifecycleMountChild />
            </div>
        )
    }
}

export default LifecycleMount
