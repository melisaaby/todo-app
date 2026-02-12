import React from 'react';

const NoteForm = ({ title, setTitle, desc, setDesc, handleSave, isEditing, cancelEdit }) => {
  return (
    <div className="input-section">
      <h3>{isEditing ? "Notu Düzenle" : "Yeni Not Ekle"}</h3>
      <input 
        placeholder="Başlık..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Detaylar..." 
        value={desc} 
        onChange={(e) => setDesc(e.target.value)} 
      />
      <button className="add-btn" onClick={handleSave}>
        {isEditing ? "Değişiklikleri Kaydet" : "Notu Kaydet"}
      </button>
      {isEditing && (
        <button onClick={cancelEdit} style={{marginTop: '5px'}}>Vazgeç</button>
      )}
    </div>
  );
};

export default NoteForm;