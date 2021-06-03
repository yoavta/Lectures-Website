import React from "react";

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>יש לי כבר חשבון </h2>
        <span> התחבר\י עם המייל והסיסמה שלך</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label="מייל"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="סיסמה"
          />
          <div className ='buttons'>
          <CustomButton type="submit">כניסה </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>כניסה עם גוגל </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
