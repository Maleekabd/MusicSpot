import { useReducer, useState } from "react";
import { Todos } from "./components/Todos";

// kalo global make kapital

// const ACTIONS = {
//     INCREMENT: "increment",
//     DECREMENT: "decrement"
// }


// action buat ADD_TODO

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO : "delete-todo"
}


// buat function handler new todo

const newTodo = (name) => {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }

}


// buat reducer untuk login handler

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo; 
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return [...todos]
    }
}

// reducer untuk counter management 

// const reducer = (state, action) => {
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return {
//                 count: state.count + 1
//             }
//         case ACTIONS.DECREMENT:
//             return {
//                 count: state.count - 1
//             }
//         default:
//             return state
//     }
// }

const useReducerExcercise = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch({type : ACTIONS.ADD_TODO, payload: {name : name}}); 
       setName('');
    }

    console.log(todos);

    // function yang menghandle increment dan decrement  

    // const INCREMENT = () => {
    //     dispatch({ type: ACTIONS.INCREMENT })
    // }

    // const DECREMENT = () => {
    //     dispatch({ type: ACTIONS.DECREMENT })
    // }

    // return (
    //     <div>
    //         <button onClick={DECREMENT}> - </button>
    //         <span style={{
    //             margin:"10px"
    //         }}>{state.count}</span>
    //         <button onClick={INCREMENT}> + </button>
    //     </div>
    // );


    return (
        <>
        <form defaultValue={name} onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
        {todos.map(todo => (
            <Todos key={todo.id} todo={todo} dispatch={dispatch}/>
        ))}
        </>
    )
}

export default useReducerExcercise;