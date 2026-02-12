import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      {currentUser ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: 'white' }}>
            <span>Hoş geldin, <b>{currentUser}</b></span>
            <button onClick={() => setCurrentUser(null)} style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
              Çıkış Yap
            </button>
          </div>
          <Home currentUser={currentUser} />
        </>
      ) : (
        <Login onLogin={setCurrentUser} />
      )}
    </div>
  );
}

export default App;