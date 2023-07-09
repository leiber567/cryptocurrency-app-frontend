import Swal from 'sweetalert2';
import {
  toastConfigSuccess, toastConfigError, parseErrorData,
} from '@/helpers/feedbackMessages';

export const useNotificationMessages = () => {
  const showNotificationInfo = (notificationMessage) => {
    return Swal.fire(
      toastConfigSuccess(notificationMessage),
    );
  };
  const showNotificationError = (notificationMessage) => {
    return Swal.fire(
      toastConfigError(parseErrorData(notificationMessage)),
    );
  };
  return {
    showNotificationInfo,
    showNotificationError,
  };
};
