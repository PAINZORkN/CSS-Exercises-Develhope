import React from 'react'

class CLickCounter extends React.Component {
    
    state = {
        count: 0
    }

    handleClick = () => {
        

        this.setState( (state) => ({

            count: state.count +1

        }))
    }
    
    
    render() {
        return (
            <>
            { <h1> Count : {this.state.count}</h1> }
             <button style={{backgroundColor: 'cyan' , color: 'White' , fontSize: '3em', cursor: 'pointer'}} onClick={this.handleClick}> Increment : {this.state.count}</button>
            </>
        )
    }
}

export default CLickCounter