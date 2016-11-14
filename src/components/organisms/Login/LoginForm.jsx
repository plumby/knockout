import React from 'react';
import { Control, Form } from 'react-redux-form';
// import { isEmail, isNull } from 'validator';
import Redirect from 'react-router/Redirect'
//import style from './style.css'
import formStyle from 'components/commonStyles/form.css'


class LoginForm extends React.Component {
  handleSubmit(user) {
    const { actions } = this.props;

    actions.login(user)
  }
  render() {

    const {isAuthenticated,from} = this.props;

    if (isAuthenticated) {
      return (<Redirect to={from || '/'} />)
    }

    // return (<div>DDD</div>)
    return (
      <Form
        className={formStyle.form}
        model="forms.login"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <h2>Login</h2>

        <label>Name</label>
        <Control.text model="forms.login.name" />

        <label>Password:</label>
        <Control.text
          type="password"
          validators={{
            required: (val) => val && val.length>4,
          }}
          model="forms.login.password" />

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
