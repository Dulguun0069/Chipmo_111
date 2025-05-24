import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (username === 'admin' && password === '1234') {
      setMessage('Амжилттай нэвтэрлээ!');
    } else {
      setMessage('Нэвтрэх нэр эсвэл нууц үг буруу байна.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <div style={styles.header}>
          <h2 style={styles.title}>Нэвтрэх</h2>
          <p style={styles.subtitle}>Системд нэвтрэх хэрэгтэй</p>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Нэвтрэх нэр:</label>
            <input
              style={styles.input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Нэвтрэх нэрээ оруулна уу"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Нууц үг:</label>
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Нууц үгээ оруулна уу"
            />
          </div>
          
          <div style={styles.options}>
            <label style={styles.remember}>
              <input type="checkbox" style={styles.checkbox} />
              <span>Remember me</span>
            </label>
            <a href="#" style={styles.forgotLink}>Нууц үг мартсан?</a>
          </div>
          
          <button type="submit" style={styles.button}>Нэвтрэх</button>
        </form>

        {message && (
          <p style={{
            ...styles.message,
            color: message.includes('Амжилттай') ? '#4BB543' : '#ff3333'
          }}>
            {message}
          </p>
        )}

        <div style={styles.footer}>
          <p style={styles.footerText}>Бүртгэлгүй юу? <a href="#" style={styles.signupLink}>Бүртгүүлэх</a></p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px'
  },
  loginCard: {
    backgroundColor: '#111',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '420px',
    padding: '40px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
    border: '1px solid #333'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  title: {
    color: '#fff',
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '8px'
  },
  subtitle: {
    color: '#aaa',
    fontSize: '14px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#ddd',
    fontSize: '14px',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#222',
    border: '1px solid #333',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '15px',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  inputFocus: {
    outline: 'none',
    borderColor: '#555',
    backgroundColor: '#252525'
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
    fontSize: '14px'
  },
  remember: {
    display: 'flex',
    alignItems: 'center',
    color: '#aaa',
    cursor: 'pointer'
  },
  checkbox: {
    marginRight: '8px'
  },
  forgotLink: {
    color: '#4a6bff',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontSize: '14px'
  },
  button: {
    width: '100%',
    padding: '15px',
    background: 'linear-gradient(135deg, #FFD700, #FFC107)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px'
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(74, 107, 255, 0.3)'
  },
  message: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500'
  },
  footer: {
    textAlign: 'center',
    marginTop: '25px',
    color: '#777',
    fontSize: '14px'
  },
  footerText: {
    margin: '0'
  },
  signupLink: {
    color: '#4a6bff',
    textDecoration: 'none',
    transition: 'color 0.2s'
  }
};