import { ActionType, Actions } from '../Actions/ActionsTypes';
import { IAppState} from '../Store/IAppState';

export const initialState: IAppState = {
  value : 0
};

// eslint-disable-next-line complexity
function Reducer(
  state: IAppState,
  action: Actions
  ) {

  switch (action.type) {
    case ActionType.INCREMENT:
      return {...state, value : action.payload};
    case ActionType.DECREMENT:
      return {...state,value:action.payload};
      
    default:
      return state;
  }
}

export default Reducer;
