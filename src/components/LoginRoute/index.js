import React, { Component } from 'react';
import Cookies from 'js-cookie';

import './index.css';

class LoginRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      profilePicture: '',
      address: '',
      phoneNumber: '',
      signUpEmail: '',
      signUpPassword: '',
      error: '',
      isActiveSignUp: false,
    };
  }

  onSignIn = (jwtToken) => {
    const { history } = this.props;
    Cookies.set('jwt_token', jwtToken, { expires: 30, path: '/' });
    history.replace('/');
  };

  handleLogin = async (e) => {
    e.preventDefault();
    let url = 'http://localhost:3000/login';
    const { email, password } = this.state;
    const userDetails = {
      username: email,
      password: password,
    };

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSignIn(data.jwtToken);
    }
  };

  handleSignUp = async (e) => {
    e.preventDefault();
    let url = 'http://localhost:3000/register';
    const { signUpEmail, signUpPassword, profilePicture, address, phoneNumber } = this.state;
    const userDetails = {
      username: signUpEmail,
      password: signUpPassword,
      picture: profilePicture,
      address: address,
      number: phoneNumber,
    };

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      console.log('User Registered Successfully');
    } else {
      this.setState({ error: 'User already exists' });
    }
  };

  onClickSignUp = () => {
    this.setState((prevState) => ({ isActiveSignUp: !prevState.isActiveSignUp }));
  };

  render() {
    const {
      email,
      password,
      profilePicture,
      address,
      phoneNumber,
      signUpEmail,
      signUpPassword,
      error,
      isActiveSignUp,
    } = this.state;

    return (
    <div className='login-bg-container'>
      <div className="login-container" id="login-container">
        {!isActiveSignUp ? (
          <form className="login-input-element-container" id="login-form" onSubmit={this.handleLogin}>
            <h1 className="main-heading">Login </h1>
            <div className="email-input-element">
              <label htmlFor="emailInput" className="label-element">
                Email
              </label>
              <input
                type="email"
                id="emailInput"
                className="input-element"
                placeholder="Enter Your EmailId"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="email-input-element">
              <label htmlFor="passwordInput" className="label-element">
                Password
              </label>
              <input
                type="password"
                id="passwordInput"
                placeholder="Enter Your Password"
                className="input-element"
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <p className="error-message" id="error-message">
              {error}
            </p>
            <button className="login-btn" type="submit">
              Login
            </button>
            <p>
              Don't have an account?{' '}
              <button type="button" onClick={this.onClickSignUp} className="sign-up">
                SignUp
              </button>
            </p>
          </form>
        ) : (
          <form className="signup-input-element-container" id="signup-form" onSubmit={this.handleSignUp}>
            <h1 className="main-heading">SignUp</h1>
            <div className="email-input-element">
              <label htmlFor="urlInput" className="label-element">
                Profile Picture
              </label>
              <input
                type="url"
                id="urlInput"
                className="input-element"
                placeholder="Enter Your EmailId"
                value={profilePicture}
                onChange={(e) => this.setState({ profilePicture: e.target.value })}
              />
            </div>

            <div className="email-input-element">
              <label htmlFor="textareaElement" className="label-element">
                Address
              </label>
              <textarea
                cols="25"
                rows="5"
                id="textareaElement"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => this.setState({ address: e.target.value })}
              ></textarea>
            </div>
            <div className="email-input-element">
              <label htmlFor="textareaElement" className="label-element">
                Number
              </label>
              <input
                type="number"
                className="input-element"
                placeholder="Enter Your Phone Number"
                id="numberInput"
                value={phoneNumber}
                onChange={(e) => this.setState({ phoneNumber: e.target.value })}
              />
            </div>
            <div className="email-input-element">
              <label htmlFor="signEmailInput" className="label-element">
                Email
              </label>
              <input
                type="email"
                id="signEmailInput"
                className="input-element"
                placeholder="Enter Your EmailId"
                value={signUpEmail}
                onChange={(e) => this.setState({ signUpEmail: e.target.value })}
              />
            </div>
            <div className="email-input-element">
              <label htmlFor="signUppasswordInput" className="label-element">
                Password
              </label>
              <input
                type="password"
                id="signUppasswordInput"
                placeholder="Enter Your Password"
                className="input-element"
                value={signUpPassword}
                onChange={(e) => this.setState({ signUpPassword: e.target.value })}
              />
            </div>
            <button className="login-btn" type="submit">
              SignUp
            </button>
          </form>
        )}
      </div>
      </div>
    );
  }
}

export default LoginRoute;
