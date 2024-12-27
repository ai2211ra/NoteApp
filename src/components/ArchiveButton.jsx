import React from "react";

function ArchiveButton({ id, onArchive, isArchive}) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{isArchive ? 'Undo' : 'Archive File'}</button>
}

export default ArchiveButton;