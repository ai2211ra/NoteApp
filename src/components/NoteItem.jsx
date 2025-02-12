import React from "react";

import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, isArchive }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody title={title} createdAt={createdAt} body={body} />
            </div>
            
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
            </div>
            
        </div>
    );
}

export default NoteItem;