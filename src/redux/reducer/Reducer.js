import { ADD_TASK, COMPLETE_TASk, DELETE_TASK, EDIT_TASK } from "../types/Types";

const initialState = {
    todos: [
        {
            id: Math.random(),
            task: "Learn mongodb",
            isDone: false
        },
        {
            id: Math.random(),
            task: "Learn React js",
            isDone: true
        },
        {
            id: Math.random(),
            task: "Learn HTML",
            isDone: true
        }
    ]
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, todos: [...state.todos, payload] }

        case DELETE_TASK:
            return { ...state, todos: state.todos.filter((el) => el.id !== payload) }

        case COMPLETE_TASk:
            return { ...state, todos: state.todos.map((el) => (el.id === payload) ? { ...el, isDone: !el.isDone } : el) }

        case EDIT_TASK:
            return { ...state, todos: state.todos.map((el) => (el.id === payload.idTask) ? { ...el, task: payload.value } : el) }

        default: return state;

    }
}
export default taskReducer;