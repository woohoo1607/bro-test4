export const setData = (name, data) => {
  return localStorage.setItem(name, data);
};

export const getData = (name) => {
  return localStorage.getItem(name) || null;
};

export const removeData = (name) => {
  localStorage.removeItem(name);
};
