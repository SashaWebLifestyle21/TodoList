import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface ITodo {
    id: string
    text: string
    isCompleted: boolean
    dateCreate: {
        day: number,
        month: number,
        year: number
    }
}

export interface IToDoState {
    todos: ITodo[]
}

const initialState: IToDoState = {
    todos: [],
}

export interface IUpdateAction {
    text: string
    id: string
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo(state, action: PayloadAction<ITodo>) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo(state, action: PayloadAction<IUpdateAction>) {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, text: action.payload.text}
                } else return todo
            })
        },
        completeTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return {...todo, isCompleted: !todo.isCompleted}
                } else return todo
            })
        },
    },
})

export default todoSlice.reducer