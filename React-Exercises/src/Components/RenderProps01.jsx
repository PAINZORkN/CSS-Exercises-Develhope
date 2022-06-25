import React from "react";

export class TodoList extends React.Component {

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

    render() {

        return (
            <>
                <ul>
                    {this.state.items.map((name) => <li key={name}>{name}</li>)}
                </ul>

                <input type="text" name="track" value={this.state.track} onChange={this.handleChange}></input>
                <button onClick={this.handleAddButton}>Send</button>

                {this.props.render(this.state.items)}
            </>

        )
    }

}

// Modify the TodoList component so that, instead of rendering
// the items array within the ul tag,
// it calls the function passed to its render prop,
// passing it the items array as a parameter,
// as well as the function required to delete the item.
// Pass a render prop to the TodoList component
// to correctly render and interact with the items array.