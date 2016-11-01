import { combineForms } from 'react-redux-form';

const initialRegistration = { name: 'a', password:'', confirmPassword:'' };
const initialLogin = { name: '', password:'' };

export default combineForms({
  registration: initialRegistration,
  login:initialLogin
}, 'forms');
