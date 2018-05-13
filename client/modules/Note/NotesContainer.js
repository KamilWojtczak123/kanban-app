import { connect } from 'react-redux';
import Notes from './Notes';

import { deleteNote, createNote, createNotes, createNoteRequest, updateNote, deleteNoteRequest, editNote, updateNoteRequest } from "../Note/NoteActions";

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  addNote: createNoteRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);