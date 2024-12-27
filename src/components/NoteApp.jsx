import React from "react";
import NoteArchive from "./NoteArchive";
import NoteActive from "./NoteActive";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHendler = this.onDeleteHendler.bind(this);
        this.onArchiveHendler = this.onArchiveHendler.bind(this)
        this.onAddNoteHendler = this.onAddNoteHendler.bind(this);
    }

    onDeleteHendler(id) {
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ notes });
    }

    onArchiveHendler(id) {
        const updateNotes = this.state.notes.map(note => {
            if (note.id === id) {
                note.archived = !note.archived;
            }
            return note;
        });
        this.setState({
           notes: updateNotes
        });
    }

    onAddNoteHendler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archive: false,
                    }
                ]
            }
        });
    }

    render() {
        const notes = this.state.notes;
        const activeNotes = notes.filter((note) => {
            return note.archived === false
        });
        const archiveNotes = notes.filter((note) => {
            return note.archived === true
        });
        return (
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Note App</h1>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHendler} />
                    <h2>Note Aktif</h2>
                    <NoteActive notes={activeNotes} onArchive={this.onArchiveHendler} onDelete={this.onDeleteHendler} />
                    <h2>Archive</h2>
                    <NoteArchive notes={archiveNotes} onArchive={this.onArchiveHendler} onDelete={this.onDeleteHendler} isArchive/>
                </div>
            </div>
        );
    }
}

export default NoteApp