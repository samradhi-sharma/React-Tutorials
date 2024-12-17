
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions"
const initialState={
    notes:[{text:'jello world', createdOn: new Date()},
        {text:'hello world', createdOn: new Date()}
    ]
}

export function noteReducer(state=initialState, action){
    switch(action.type){
        case ADD_NOTE:
            return{
                ...state,
                notes:[
                    ...state.notes,{
                        text:action.text,
                        createdOn:new Date()
                    }
                ]
            }
        case DELETE_NOTE: 
        state.notes.splice(index,1); 
        return{
            ...state,
            notes:state.notes
        } 
        default:
            return state; 
    }
}