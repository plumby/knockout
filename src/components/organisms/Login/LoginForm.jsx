import React from 'react';

// const LoginForm = () => (<div>XXX</div>)
//(<div>A</div>)

//
import { Control, Form } from 'react-redux-form';
import Redirect from 'react-router/Redirect'


class LoginForm extends React.Component {
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

    const {isAuthenticated,from} = this.props;

    // const from='/'

    console.log(from);

    if (isAuthenticated) {
      return (<Redirect to={from || '/'} />)
    }

    // return (<div>DDD</div>)
    return (
      <Form
        model="forms.login"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <label>Name</label>
        <Control.text model="forms.login.name" />
        <label>Password:</label>
        <Control.text model="forms.login.password" />

        <button type="submit">
          Login
        </button>
      </Form>
    );
  }
}

//
//



export default LoginForm
