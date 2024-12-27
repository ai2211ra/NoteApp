import React from "react";

function NoteItemBody({ title, createdAt, body }) {
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p>{body}</p>
        </div>
    );
}

export default NoteItemBody;