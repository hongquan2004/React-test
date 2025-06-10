import React from 'react';

const Toast = ({ show, message }) => (
  show ? <div className="toast-message">{message}</div> : null
);

export default Toast;
