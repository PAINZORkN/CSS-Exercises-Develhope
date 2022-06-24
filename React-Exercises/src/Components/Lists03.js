import React from "react";

export class TodoList extends React.Component{

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

    render(){

        return(
            <>
        <ul>
        {this.state.items.map((name, index) => 

        <li key={name }>{name}</li>)}
        </ul>

        <input type="text" name="track" value={this.state.track} onChange={this.handleChange}></input>
        <button onClick={this.handleAddButton}></button>
            </>
            
        )
    }

}

// Create a TodoList component that renders a ul tag with a li tag for each item contained in 
// the items state variable. The items state variable should be an array of strings. 
// The TodoList component should also contain an input tag and a button. When the button is clicked, 
// the event handler should add the value of the input tag to the items array.