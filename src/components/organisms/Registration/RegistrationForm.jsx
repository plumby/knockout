import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import * as api from 'api'
import formStyle from 'components/commonStyles/form.css'


const minLength = (len) => (val) => val && val.length >= len || val.length===0;

const passwordsMatch = ({ password, confirmPassword }) => {
  return password === confirmPassword;
};

//const requiredPwd = (val) => val && val.length > 4
const required = (val) => val && val.length

const nameAvailableAsync = (val,done) => api.checkAvailability(val)
  .then(res => {
    return done(res)
  })


class RegistrationForm extends React.Component {
  handleSubmit(user) {
    const { actions, formActions } = this.props;

    api.checkAvailability(user.name)
    .then(available => {
      available ?
        actions.register(user):
        formActions.setValidity('forms.registration.name', {available:false})
    })

    //actions.register(user)
  }
  render() {
    return (
      <Form
        className={formStyle.form}
        model="forms.registration"
        onSubmit={(user) => this.handleSubmit(user)}
        validators={{
          '': { passwordsMatch },
          password: {required}
        }}
      >
        <h2>Register new account</h2>
        <label>Name</label>
        <Control.text
          asyncValidators={{
            available: nameAvailableAsync
          }}
          model=".name" />
        <Errors
          model="forms.registration.name"
          messages={{
            required: 'Please provide a username',
            available: 'Name already taken'
          }}
        />

        <label>Password:</label>
        <Control.text
          type="password"
          model=".password" />
        <Errors
          model="forms.registration.password"
          messages={{
            required: 'Please provide a valid password',
            minLength: 'Password must be at least 5 chars'
          }}
        />
        <label>Retype Password:</label>
        <Control.text
          type="password"
          validators={{
            required: (val) => val && val.length,
            minLength: minLength(5)
          }}
          model=".confirmPassword" />

        <Errors
          model="forms.registration"
          messages={{
            passwordsMatch: 'Passwords must match'
          }}
        />

        <button type="submit">
          Finish registration
        </button>
      </Form>
    );
  }
}

export default RegistrationForm
