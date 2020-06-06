
export enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT ='DECREMENT',
}


export interface IIncrement {
  type: ActionType.INCREMENT;
  payload: number;
}

export interface IDecrement {
  type: ActionType.DECREMENT;
  payload: number;
}


export type Actions =
  | IIncrement
  | IDecrement
