import React from 'react';
import { Control, Form, Errors } from 'react-redux-form';
import * as api from 'api'
import style from './style.css'


const minLength = (len) => (val) => val && val.length >= len || val.length===0;

const passwordsMatch = ({ password, confirmPassword }) => {
  return password === confirmPassword;
};

const required = (val) => val && val.length > 4

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
        className={style.login}
        model="forms.registration"
        onSubmit={(user) => this.handleSubmit(user)}
        validators={{
          '': { passwordsMatch },
          password: {required}
        }}
      >
        <h2>Register new account</h2>
        <label className={style.prompt}>Name</label>
        <Control.text
          className={style.input}
          asyncValidators={{
            available: nameAvailableAsync
          }}
          model=".name" />
        <Errors
          model="forms.registration.name"
          className={style.error}
          messages={{
            available: 'Name already taken'
          }}
        />

        <label className={style.prompt}>Password:</label>
        <Control.text
          type="password"
          className={style.input}
          model=".password" />
        <Errors
          model="forms.registration.password"
          className={style.error}
          messages={{
            required: 'Please provide a valid password',
            minLength: 'Password must be at least 5 chars'
          }}
        />
        <label className={style.prompt}>Retype Password:</label>
        <Control.text
          type="password"
          className={style.input}
          validators={{
            required: (val) => val && val.length,
            minLength: minLength(5)
          }}
          model=".confirmPassword" />

        <Errors
          className={style.error}
          model="forms.registration"
          messages={{
            passwordsMatch: 'Passwords must match'
          }}
        />

        <button className={style.btn} type="submit">
          Finish registration
        </button>
      </Form>
    );
  }
}

export default RegistrationForm
