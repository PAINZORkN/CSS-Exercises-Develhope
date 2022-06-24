import React from "react";

export class TodoList4 extends React.Component{

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

    handleRemove = (e) => {
        const Remove = [...this.state.items];
        Remove.splice(e, 1)
        this.setState({items: Remove})
    }

    render(){

        return(
            <>
        <ul>
        {this.state.items.map((name, index) => 

        <li key={name}><button>Remove</button>{name}</li>)}
        </ul>

        <input type="text" name="track" value={this.state.track} onChange={this.handleChange}></input>
        <button onClick={this.handleAddButton}>Send</button>
        <button onClick={() => this.handleRemove}>Remove</button>
            </>
            
        )
    }

}

// Modify the TodoList by adding a "remove" button to each li tag.
//  When clicked, the event handler should 
//  remove corresponding item from the items array.