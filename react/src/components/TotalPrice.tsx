import { useReducer } from "react";

type TotalPriceType = {
    totalPrice: number
};


const initialState = {count: 0};
function reducer(state, action) {
    switch (action.type) {
        case "increment":
        return { count: state.count + 1 };

        case "decrement":
        return { count: state.count - 1};

        case "reset":
        return initialState;

        default:
        return state;
    };
};

export default function TotalPrice ({totalPrice}:TotalPriceType) {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="">
            <p className="text-lg mb-3">{totalPrice}</p>
            <p className="">{state.count}</p>
            <button className="" onClick={()=> dispatch({type: 'increment'})}>add+</button>
            <button className="" onClick={()=> dispatch({type: 'decrement'})}>decrement-</button>
            <button className="" onClick={()=> dispatch({type: 'reset'})}>reset</button>
        </div>
    )
}