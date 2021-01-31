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

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("LifecycleMount shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("LifecycleMount getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log("LifecycleMount componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: 'KK'
        })
    }

    render() {
        console.log("LifecycleMount render")
        return (
            <div>
                <div>Lifecycle Mount.</div>
                <button onClick={this.changeState}>Click Me</button>
                <LifecycleMountChild />
            </div>
        )
    }
}

export default LifecycleMount
