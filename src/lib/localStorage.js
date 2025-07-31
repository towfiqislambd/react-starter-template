export function setItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
}

export function getItem(key) {
  try {
    const data = window.localStorage.getItem(key);
    return data ? data : undefined;
  } catch (err) {
    console.error(err);
  }
}

export function removeItem(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
}
