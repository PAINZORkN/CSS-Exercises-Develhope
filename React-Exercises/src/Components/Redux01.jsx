const defaultState = 0;

const INCREMENT = 'COUNTER@INCREMENT';
const DECREMENT = 'COUNTER@DECREMENT';
const RESET = 'COUNTER@RESET';

export function inc (by = 1) {
    return {
        type: "INCREMENT",
        payload: by
    }
}

export function dec (by = 1) {
    return {
        type: "DECREMENT",
        payload: by
    }
}

export function res () {
    return {
        type: "RESET",
    }
}

export function counterReducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT: {
            return state + action.payload
        }
        case DECREMENT: {
            return state - action.payload
        }
        case RESET: {
            return defaultState
        }
        default: {
            return state
        }
}
}



/*
Create a CounterReducer, along with its action types and action creators,
to keep track of a counter that can be incremented, decremented and reset.
*/