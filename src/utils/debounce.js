const debounce = (fn, delay, immediate) => {
  let timeout = null;

  return (...args) => {
    let call = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;

      if (!immediate) {
        fn(...args);
      }
    }, delay);

    if (call) {
      fn(...args);
    }
  };
}

export default debounce;
