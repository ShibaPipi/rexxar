/**
 * 存储 localStorage
 */
export const setStore = (name, content) => {
  if (!name) {
    return;
  }

  ('string' !== typeof content) && (content = JSON.stringify(content));

  window.localStorage.setItem(name, content);
};

/**
 * 获取 localStorage
 */
export const getStore = name => {
  if (!name) {
    return;
  }

  return window.localStorage.getItem(name);
};

/**
 * 删除 localStorage
 */
export const removeStore = name => {
  if (!name) {
    return;
  }

  window.localStorage.removeItem(name);
};
