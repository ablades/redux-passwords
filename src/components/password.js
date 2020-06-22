import React, { Component } from 'react'

class Password extends Component {
    constructor(props){
        super(props)
        this.state = { password: 'p@ssw0rfd'}
    }

    random(n) {
        return Math.floor(Math.random() * n)
      }

    generatePassword() {
        var names = ['Ann', 'Bob', 'Cat', 'Dan'];
        var name = names[this.random(names.length)]


        this.setState({ password: name})
    }

    render() {
        return (
            <div>
                <div>{this.state.password}</div>
                <div>
                    <button onClick={() => { this.generatePassword() }}> Generate </button>
                </div>
            </div>
        )
    }
}

export default Password