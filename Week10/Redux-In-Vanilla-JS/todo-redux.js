 
 const redux = require("redux");

//  Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO="Toggle TODO";

// Action creators

const addToDo =(text) => ({text, type:ADD_TODO})
const toggleToDo = (index) => ({index, type:TOGGLE_TODO});

// Initial State

const initialState={
    todos:[]
}
// Reducers
// must return updated states
function todoReducer(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            }

            case TOGGLE_TODO:
                return{
                    ...state,
                    todos:state.todos.map((todo,i)=>{
                        if(i===action.index){
                            todo.completed=!todo.completed;
                        }
                        return todo;
                    })
                }
                default:
                    return state;
    }
}

// Creating Store
const store=redux.createStore(todoReducer);

// dispatch the actons

store.dispatch(addToDo("Learn Redux"));
store.dispatch(addToDo("Learn React"));
store.dispatch(toggleToDo(0));

// read data from store
console.log(store.getState());