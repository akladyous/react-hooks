import { useReducer } from "react"

const initialState = {
    count: 0
};
const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {...state, count: state.count += 1};
        case "decrement":
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

export default function ReducerParent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Counter</h3>
            <section>
                <p>{state.count}</p>
                <button onClick={()=>{dispatch({type: 'increment'})}} >increment</button>
                <button onClick={()=>{dispatch({type: 'decrement'})}} >decrement</button>
            </section>
        </div>
    )
}
