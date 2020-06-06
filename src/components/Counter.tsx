import React from 'react';
import { useDispatch ,useSelector } from '../Store/Provider';
import { increment, decrement } from '../Actions/Actions';



const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const value = useSelector(({value})=> value );
    
    return(
        <div className="counter">
            <p id="counter-value">Current value: {value}</p>
            <p>
                <button id="increment" onClick={()=> dispatch(increment(value))}>
                    Increment
                </button>
                <button id="decrement" onClick={()=> dispatch(decrement(value))}>
                    Decrement
                </button>
            </p>
        </div>
    );
}
    



export default Counter;
