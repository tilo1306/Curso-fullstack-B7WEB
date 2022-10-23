import {AnyAction} from 'redux';

interface Note {
  name: string;
  level: string;
  workoutDays: [];
  muWorkouts: [];
  lastWorkout: [];
  dailyProgress: [string, string];
}

const initialState: Note = {
  name: '',
  level: '',
  workoutDays: [],
  muWorkouts: [],
  lastWorkout: [],
  dailyProgress: ['2019-09-13', '2049-09-12'],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
      break;
    case 'SET_LEVEL':
      return {...state, level: action.payload.level};
      break;
  }
  return state;
};
