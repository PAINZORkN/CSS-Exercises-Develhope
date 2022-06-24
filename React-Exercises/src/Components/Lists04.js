import React from "react";

export class TodoList2 extends React.Component{

    state = {
        items: [],
        
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleAddButton = (e) => {
        let {input, items} = this.state
        e.preventDefault()
        // this.state.items.push(this.state.track);
        items.push(input)
       e.target.elements.input.value = ''

       console.log()
    }


    render(){

        return(
            <>
        <ul>
        {this.state.items.map((name) => <li key={name }>{name}</li>)}
        </ul>

        <input type="text" name="track" value={this.state.track} onChange={this.handleChange}></input>
        <button onClick={this.handleAddButton}>Send</button>
      
            </>
            
        )
    }

}


// Modify the TodoList component so that the input clears every time a Todo is added to the items array.