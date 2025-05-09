export const cacheData = (key, value, minutes) => {
  const now = new Date();
  const expiry = Date.now() + minutes * 60 * 1000;
  const item = {
    value: value,
    exp: expiry,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
export const getCachedItem = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    const city = JSON.parse(item);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return city.value;
  } catch {
    return null;
  }
};
