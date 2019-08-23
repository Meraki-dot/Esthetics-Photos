import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../cssNonRetina/Login.css';

const Login = ({ login }) => {

  const initialUsers = [
    {
      username: 'user',
      password: '123'
    }
  ];

  const [users] = useState(initialUsers);

  const log = (username, password) => {

    let validUser =
      users.filter(
        user => user.password === password
          && user.username === username
      );

    return validUser.length > 0;
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const buttonClicked = () => {
    setLoginAttempted(true);
    setLoginSuccess(log(username, password));
  }
  return loginAttempted ? loginSuccess ? <Redirect to="/main" /> : <Redirect to="/reject-page" />
    : (
      <div >
        <div id="primaryContainer">
          <div className="loginNavContainer">
            <Link className="NavItem" to="/"><strong>Esthetics</strong></Link>
            <div id="greeting">Hello & Welcome Back!</div>
          </div>
          <div id="logWrapper">
            <div id="loginUser">
              <div id="usernameTag">Username</div>
              <div id="usernameInput">
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
              </div>
            </div>
            <div id="loginPass">
              <div id="passwordTag">Password</div>
              <div id="passwordInput">
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
              </div>
            </div>
            <div id="loginButtonContainer">
              <div id="loginButton">
                <button onClick={buttonClicked}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


Login.propTypes = {
  login: PropTypes.func
}
export default Login;