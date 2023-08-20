import React from 'react'
import { ACTIONS } from "../useReducer"

export const Todos = ({ todo, dispatch }) => {

    const Toggle = () => {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
    }

    const DeleteTODO = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
    }

    return (
        <>
            <div style={{
                color: todo.complete ? "#37FF8B" : "#5A5353",
                backgroundColor: todo.complete ? "#141115" : "#DDF45B"
            }}>{todo.name}</div>
            <button onClick={Toggle}>Toggle</button>
            <button onClick={DeleteTODO}>Delete</button>
        </>
    )
}
