import {AnyAction} from 'redux';

interface CounterState {
  list: Array<Note>;
}
interface Note {
  title: string;
  body: string;
}

const initialState: CounterState = {
  list: [{title: 'Primeira Nota', body: 'Testando 1,2,3...'}],
};

export default function counterReducer(
  state = initialState,
  action: AnyAction,
) {
  let newList = [...state.list];
  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body,
        };
      }
      break;
    case 'DEL_NOTE':
      newList = newList.filter((item, index) => index != action.payload.key);
      break;
  }
  return {...state, list: newList};
}
