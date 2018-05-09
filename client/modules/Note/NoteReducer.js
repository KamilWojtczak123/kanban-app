import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from './NoteActions';
import { CREATE_LANE, DELETE_LANE } from './LaneActions';

const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.note];

   case UPDATE_NOTE:
     return state.map((note) => {
       return note.id === action.id ? { ...note, ...action.note } : note;
     });

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.noteId);

	case CREATE_LANE:
  		return state.map(note => {
    	if (note.id === action.noteId) {
      		const lane = [...note.lane, action.lane.id];
      		return { ...notes, lane };
    	}
    	return lane;
  	});
    default:
      return state;
  }
}