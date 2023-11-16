import 'boxicons';
import React from 'react';
import './index.css';

const App = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = e => {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <div className="login_box">
        <form>
          <input type="checkbox" className="input_check" id="input_check" />
          <label className="toggle" htmlFor="input_check">
            <span className="text off">off</span>
            <span className="text on">on</span>
          </label>
          <div className="login_light"></div>
          <h2>Login</h2>

          {/* <== Input Email ==> */}
          <div className="input_box">
            <span className="icon">
              <box-icon name="envelope" type="solid" color="#00f7ff"></box-icon>
            </span>
            <input
              className="inputEmail"
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
            <div className="input_line"></div>
          </div>

          {/* <== Input Password ==> */}
          <div className="input_box">
            <span className="icon">
              <box-icon type="solid" name="lock-alt" color="#00f7ff"></box-icon>
            </span>
            <input
              className="inputPass"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <div className="input_line"></div>
          </div>

          {/* <== Button ==> */}
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
