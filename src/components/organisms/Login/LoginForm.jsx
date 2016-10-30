import React from 'react';
import { Control, Form } from 'react-redux-form';
import Redirect from 'react-router/Redirect'
import style from './style.css'



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
        className={style.login}
        model="forms.login"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <div>
          <label>Name</label>
          <Control.text className={style.input} model="forms.login.name" />
        </div>
        <div>
          <label>Password:</label>
          <Control.text className={style.input} model="forms.login.password" />
        </div>
        <button className={style.btn} type="submit">
          Login
        </button>
      </Form>
    );
  }
}

//
//



export default LoginForm
