import  React,{ createContext, useContext, useReducer, Dispatch } from 'react';
import { Actions } from '../Actions/ActionsTypes';
import { IAppState } from './IAppState';
import Reducer, { initialState } from '../Reducer/Reducer';
import { Action } from 'redux';

interface ICreateReducer { children: JSX.Element }

export type IContextProps = [IAppState?, Dispatch<Actions>?]

export type IDispatcher = (
  dispatch: Dispatch<Action>,
  state: IAppState
) => void

export const StateContext = createContext<IContextProps>([]);

export const Provider = ({ children }: ICreateReducer): JSX.Element => (
  <StateContext.Provider value={useReducer(Reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

export function useSelector<T>(selector: (state: IAppState) => T): T {
  const [state] = useStateValue()
  if (!state) throw new Error('State is Undefined')
  return selector(state)
}

export function useDispatch() {
  const [state, dispatch] = useStateValue()

  function autoReDispatch(action : Function) {
    if (!dispatch) throw new Error('dispatch is Undefined')
    typeof action === 'function' ? action(autoReDispatch, state) : dispatch(action);
  }

  return autoReDispatch
}