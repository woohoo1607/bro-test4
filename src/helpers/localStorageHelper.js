export const setData = async (name, data) => {
  return await localStorage.setItem(name, data);
};

export const getData = async (name) => {
  return (await localStorage.getItem(name)) || null;
};

export const removeData = async (name) => {
  return await localStorage.removeItem(name);
};
