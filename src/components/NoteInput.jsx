import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            body: '',
        }

        this.onTitleChangeEventHendler = this.onTitleChangeEventHendler.bind(this);
        this.onBodyChangeEventHendler = this.onBodyChangeEventHendler.bind(this);
        this.onAddChangeEventHendler = this.onAddChangeEventHendler.bind(this);
    }

    onTitleChangeEventHendler(event) {
        this.setState(() => {
           return {
            title: event.target.value.slice(0, this.state.charLimit),
           }
        });
    }

    onBodyChangeEventHendler(event) {
        this.setState(() => {
            return{
                body: event.target.value,
            }
        });
    }

    onAddChangeEventHendler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const charLimit = 50;
        return (
            <div className="note-input" >
                <div className="note-input__title">
                    <h2>Tambah Catatan</h2>
                </div>
                <div className="note-input__body">
                    <p className="note-input__title__char-limit">Sisa Karakter: {charLimit - this.state.title.length}</p>
                    <form onSubmit={this.onAddChangeEventHendler} >
                        <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHendler} />
                        <textarea rows={20} placeholder="Tambah catatan" value={this.state.body} onChange={this.onBodyChangeEventHendler} />
                        <button type="submit">Tambah Catatan</button>
                    </form>
                </div>  
            </div>
            
        )
    }
}

export default NoteInput;