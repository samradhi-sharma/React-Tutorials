// Action Constants

const ADD_NOTE = "Add Note";
const DELETE_NOTE = "Delete Note";

// Action Creators

export const addNote = (text) =>({text, type:ADD_NOTE});
export const deleteNote = (index) =>({index, type:DELETE_NOTE});