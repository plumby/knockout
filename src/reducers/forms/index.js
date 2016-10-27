import { combineForms } from 'react-redux-form';

const initialUser = { name: '', password:'' };

export default combineForms({
  registration: initialUser
}, 'forms');
