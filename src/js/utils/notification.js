import '../../../node_modules/@pnotify/core/dist/PNotify.css';
import '../../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';

const notification = {
  errorMessage: (message) => {
    error({
    text: `${message}`
    })
  },
  
  infoMessage: (message) => {
    info({
    text: `${message}`
    })
  },
};

export default notification;