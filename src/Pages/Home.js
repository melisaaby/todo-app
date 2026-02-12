import React, { useState, useEffect } from 'react'; 
import NoteForm from '../Components/NoteForm';
import NoteCard from '../Components/NoteCard';

const Home = ({ currentUser }) => {
  // 1. Uygulama açıldığında LocalStorage'dan verileri çekiyoruz
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  // 2. Notlar her değiştiğinde LocalStorage'a kaydediyoruz
  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  const handleSave = () => {
    if (!title || !desc) return alert("Boş bırakmayın!");
    if (isEditing) {
      setNotes(notes.map(n => n.id === isEditing ? { ...n, title, desc } : n));
      setIsEditing(null);
    } else {
      setNotes([...notes, { id: Date.now(), title, desc, completed: false, owner: currentUser }]);
    }
    setTitle(""); setDesc("");
  };

  const userNotes = notes.filter(n => n.owner === currentUser);

  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));
  const toggleComplete = (id) => {
    setNotes(notes.map(n => n.id === id ? { ...n, completed: !n.completed } : n));
  };
  const startEdit = (note) => {
    setIsEditing(note.id);
    setTitle(note.title);
    setDesc(note.desc);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>{currentUser} Not Defteri</h1>
      <NoteForm 
        title={title} setTitle={setTitle} 
        desc={desc} setDesc={setDesc} 
        handleSave={handleSave} 
        isEditing={isEditing}
        cancelEdit={() => {setIsEditing(null); setTitle(""); setDesc("");}}
      />
      <div className="notes-grid">
        {userNotes.map(note => (
          <NoteCard 
            key={note.id} 
            note={note} 
            onDelete={deleteNote} 
            onToggle={toggleComplete} 
            onEdit={startEdit} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;