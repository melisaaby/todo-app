
import React from 'react';


const NoteCard = ({ note, onDelete, onToggle, onEdit }) => {
  return (
    <div className={`note-card ${note.completed ? 'completed' : ''}`}>
      <div>
        <h3>{note.title}</h3>
        <p>{note.desc}</p>
      </div>
      <div className="card-actions">
        {/* Burada da onToggle(note.id) çağırmalıyız */}
        <button className="check-btn" onClick={() => onToggle(note.id)}>
          {note.completed ? "Geri Al" : "Tamamla"}
        </button>
        <button className="edit-btn" onClick={() => onEdit(note)}>Düzenle</button>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>Sil</button>
      </div>
    </div>
  );
};

export default NoteCard;