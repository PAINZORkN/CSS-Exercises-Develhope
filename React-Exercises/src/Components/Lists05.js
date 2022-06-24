import React, { Component } from 'react';

export class TodoList3 extends Component {

    state = {
        todo: [],
        input: ''
        
    };

    saveInput = (e) => {
        this.setState({ input: e.target.value });

    };

    newTodo = (e) => {
        e.preventDefault();
        let { todo} = this.state;
        e.target.elements.input.value = '';
        todo.push(todo)
        this.setState({
            input: ''
        })

        
    }

    onReset = (e) => {
        e.preventDefault();
        this.setState({
            todo: []
        })

    }

    render() {
        return (
            <>
                <form onSubmit={this.newTodo}>
                    <input name='input' onChange={this.saveInput} />
                    <button type='submit'>Add Todo </button>
                    <button onClick={this.onReset}>Reset</button>
                </form>
                <ul>
                    {this.state.todo.map((item, i) => {
                        return <li key={i}> {item}</li>
                    })}
                </ul>
            </>

        )
    }
}

