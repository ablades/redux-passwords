import React, { Component } from 'react'

class Password extends Component {
    constructor(props){
        super(props)
        this.state = { 
            password: 'p@ssw0rfd',
            description: '',
        }
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
                <div>Password: {this.state.password}  </div> 
                <div>Description :{this.state.description}</div>

                <div>
                    <label for="pass">Pass: </label>
                    <input
                        id="pass"
                        onChange={(e) => {this.setState({ password: e.target.value })}}
                        value={this.state.password}
                    />
                </div>
                <div>
                    <label for="desc">Description: </label>
                    <input
                        id="desc"
                        onChange={(e) => {this.setState({ description: e.target.value })}}
                        value={this.state.description}
                    />
                 </div>
                <div>
                    <button onClick={() => { this.generatePassword() }}> Generate </button>
                </div>
            </div>
        )
    }
}

export default Password