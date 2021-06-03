import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state; 
    return (
      <div className="sign-up">
        <h2 className="title">אין לי חשבון</h2>
        <span>התחבר באמצעות מייל וסיסמה</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="שם תצוגה"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="מייל"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="סיסמה"
            required
          />

      <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="סיסמה חוזרת"
            required
          />

          <CustomButton type="submit">הרשם</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
