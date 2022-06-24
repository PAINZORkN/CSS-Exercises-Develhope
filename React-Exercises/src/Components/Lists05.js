import React, { Component } from 'react';

export class TodoList3 extends Component {

    state = {
        items: [],
        todo: '',
        
    };

    handleChange = (e) => {
        this.setState({ todo: e.target.value });

    };

    addItems = () => {
        this.state.items.push(this.state.todo)
        this.setState({todo: ''})
    }
    

    onReset = () => {
        this.setState({
            items: []
        })

    }

    render() {
        return (
            <>
                    <input name='input' onChange={this.handleChange} value={this.state.todo} />
                    <button type='button' onClick={this.addItems}>Add Todo </button>
                    <button onClick={this.onReset}>Reset</button>
                <ul>
                    {this.state.items.map((item, i) => {
                        return <li key={i}> {item}</li>
                    })}
                </ul>
            </>

        )
    }
}

