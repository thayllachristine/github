export const setLS = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getLS = key => {
  return localStorage.getItem(key);
};

export const removeLS = key => {
  return localStorage.removeItem(key);
};