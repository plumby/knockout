import React from 'react';
import { Control, Form } from 'react-redux-form';

class RegistrationForm extends React.Component {
  handleSubmit(user) {
    // const { dispatch } = this.props;
    //console.log(user);
    login(user)

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form
        model="forms.registration"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <label>Name</label>
        <Control.text model="forms.registration.name" />

        <label>Password:</label>
        <Control.text model="forms.registration.password" />

        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

export default RegistrationForm
