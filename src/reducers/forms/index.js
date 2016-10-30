import { combineForms } from 'react-redux-form';

const initialLogin = { name: 'a', password:'' };
const initialUser = { name: '', password:'' };

export default combineForms({
  registration: initialUser,
  login:initialLogin
}, 'forms');
