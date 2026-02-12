import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // İki kullanıcıyı da kontrol ediyoruz
    if ((user === "Admin" && pass === "Admin") || (user === "Test" && pass === "Test")) {
      onLogin(user); // Giriş başarılıysa kullanıcı adını gönderiyoruz
    } else {
      alert("Hatalı giriş! (Admin/Admin veya Test/Test deneyin)");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Profesyonel Not Defteri Giriş Yap</h2>
        <input 
          type="text" placeholder="Kullanıcı Adı" 
          onChange={(e) => setUser(e.target.value)} 
        />
        <input 
          type="password" placeholder="Şifre" 
          onChange={(e) => setPass(e.target.value)} 
        />
        <button type="submit" className="add-btn">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;