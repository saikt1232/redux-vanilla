//this app is to let users know that we can wire the redux and vanilla app 

const { createStore } = require('redux');

let initialState = {
    age: 20
}

let reducer = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type === 'ADD') {
        newState.age++;
    } else if (action.type === 'SUB') {
        newState.age--;
    }
    return newState;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log('Hey I am subscribed to this store now!!');
    console.log(store.getState());
})

store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'SUB' });











