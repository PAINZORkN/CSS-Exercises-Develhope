import React from "react";

export class TodoList4 extends React.Component {

    state = {
        items: [],
        track: '',

    }

    handleChange = (e) => {
        this.setState({
            track: e.target.value
        })
    }

    handleAddButton = () => {
        this.state.items.push(this.state.track);
        this.setState({
            track: ''
        })
    }

    handleRemove = (i) => {
        this.setState((prevState) => {
            return { items: prevState.items.filter((_, index) => i !== index) }
        })
    }

    render() {

        return (
            <>
                <ul>
                    {this.state.items.map((item, i) => (
                        <li key={i}>
                            <p>{item}</p>
                            <button onClick={this.handleRemove.bind(this, i)}>Remove</button>
                        </li>
                    ))}
                </ul>

                <input type="text" name="track" value={this.state.track} onChange={this.handleChange}></input>
                <button onClick={this.handleAddButton}>Send</button>
            </>

        )
    }

}

// Modify the TodoList by adding a "remove" button to each li tag.
//  When clicked, the event handler should
//  remove corresponding item from the items array.