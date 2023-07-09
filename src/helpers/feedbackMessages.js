export const toastConfigSuccess = (message) => ({
  position: 'bottom-end',
  icon: 'success',
  showConfirmButton: false,
  toast: true,
  timer: 3000,
  html: message,
});

export const toastConfigWarning = (message) => ({
  position: 'bottom-end',
  icon: 'warning',
  showConfirmButton: false,
  toast: true,
  timer: 3000,
  html: message,
});

export const toastConfigError = (message) => ({
  position: 'bottom-end',
  icon: 'error',
  showConfirmButton: false,
  toast: true,
  timer: 3000,
  html: message,
});

export const parseErrorData = (errorData) => {
  if (!errorData) return '';
  const { response } = errorData;
  if (errorData.data && errorData.data.error) {
    return errorData.data.error.message;
  }
  if (errorData.data && errorData.data.errors) {
    return 'Please enter the required information';
  }
  if (response && response.data && response.data.error) {
    return response.data.error.message;
  }
  if (errorData.error) {
    return errorData.error.toString();
  }
  if (errorData.message) {
    return errorData.message;
  }
  return errorData.toString();
};
