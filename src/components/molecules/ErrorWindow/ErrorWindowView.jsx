import React from 'react';
import style from './style.css'


// {[style.error].join(' ')}

const ErrorWindowView = ({hasErrors,errors,actions}) => {
  if (hasErrors) {
    return (<div className={style.error}>
      {errors}
      <button className={style.clearButton} onClick={() => actions.clearErrors()}>Clear</button>
    </div>)
  }
  return null;
}

export default ErrorWindowView;
