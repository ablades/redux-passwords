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
        var names = ['Ann', 'Bob', 'Cat', 'Dan']
        var name = names[this.random(names.length)]
        var str = 'abcdefghijklmnopqrstuvwxyz'
        var letter = str[this.random(str.length)]

        this.setState({ password: name + letter})
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