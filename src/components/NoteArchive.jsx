import React from "react";
import NoteItem from "./NoteItem";

function NoteArchive({ notes, onDelete, onArchive, onActive }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p className="notes-list__empty-message">Catatan Kosong</p>
            ): notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete} 
                    onArchive={onArchive}
                    onActive={onActive}
                    isArchive={note.archived}
                    {...note}
                />
            ))
            }
        </div>
    );
}

export default NoteArchive;