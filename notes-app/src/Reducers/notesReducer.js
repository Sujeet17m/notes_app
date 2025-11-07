import { v4 as uuidv4 } from "uuid";

export const notesReducer = (state, {type, payload}) => {
    switch (type) {
        case "SET_TITLE":
            return {...state, title: payload};
        case "SET_TEXT":
            return {...state, text: payload};
        case "ADD_NOTE":
            return {...state, notes: [...state.notes, {text: state.text, title: state.title, id: uuidv4()}]};
        case "CLEAR_INPUT":
            return {...state, title: "", text: ""};
        case "DELETE_NOTE":
            return {...state, notes: state.notes.filter((note) => note.id !== payload)};
        default:
            return state;
    }
};