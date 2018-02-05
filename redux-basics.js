const redux = require('redux');
const createStore = redux.createStore;
const initialState =  {
  counter: 0
}

 /*  Reducer  */
// current state argument
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    // not immutable: state.counter++, don't do this
    // but return a js obj where u copy the state
    // then overwritte the prop u want to adjust: counter
    console.log('...state inc', {...state});
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    // not immutable: state.counter++, don't do this
    // but return a js obj where u copy the state
    // then overwritte the prop u want to adjust: counter
    console.log('...state add', {...state});
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  // return updated state
  return state;
}

/*  Store  */
const store = createStore(rootReducer);
console.log(store.getState());

/*  Subscription  */
// func will be executed when the state is updated
// so when action reached reducer
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

/*  Dispatching Action  */
// type of action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

