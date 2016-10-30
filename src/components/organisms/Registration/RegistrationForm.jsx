import React from 'react';
import { Control, Form } from 'react-redux-form';
import style from './style.css'


class RegistrationForm extends React.Component {
  handleSubmit(user) {
    const { actions } = this.props;

    actions.register(user)
    //console.log(user);
    // login(user)

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form
        className={style.login}
        model="forms.registration"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <label>Name</label>
        <Control.text
          className={style.input}
          model="forms.registration.name" />

        <label>Password:</label>
        <Control.text
          className={style.input}
          model="forms.registration.password" />

        <button className={style.btn} type="submit">
          Finish registration
        </button>
      </Form>
    );
  }
}

export default RegistrationForm
