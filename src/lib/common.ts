export const sessionSet = (key: string, value: any) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const sessionGet = (key: string) => {
  const data = window.sessionStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch (err: unknown) {
    return data;
  }
};
