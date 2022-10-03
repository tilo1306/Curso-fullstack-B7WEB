import {combineReducers} from '@reduxjs/toolkit';
import NoteReducer from './NotesReducer';

export default combineReducers({
  notes: NoteReducer,
});
