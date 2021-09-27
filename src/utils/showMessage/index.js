import {showMessage} from 'react-native-flash-message';
import {Colors} from '../Colors';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Colors.message.error,
    color: Colors.white,
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Colors.primary,
    color: Colors.white,
  });
};
