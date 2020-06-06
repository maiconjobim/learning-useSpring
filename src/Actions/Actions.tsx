import { ActionType } from './ActionsTypes';


const increment = (number : number) =>{
  return async (dispatch : Function) => {

    dispatch({
      type: ActionType.INCREMENT,
      payload: number + 1
    });
  };

}
const decrement = (number : number) =>{
  return async (dispatch : Function)  => {

    dispatch({
      type: ActionType.DECREMENT,
      payload: number - 1
    });
  };

}

export { 
  increment,
  decrement
}
