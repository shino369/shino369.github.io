export const sleep = (time: number): Promise<void> => {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
};

export const changeClass = (ref: HTMLElement) => {
  return {
    add: async (classname: string, wait?: number) => {
      ref.classList.add(classname);
      if (wait) await sleep(wait);
    },
    remove: async (classname: string, wait?: number) => {
      ref.classList.remove(classname);
      if (wait) await sleep(wait);
    },
    replaceWith: async (a: string, b: string, wait?: number) => {
      ref.classList.remove(a);
      ref.classList.add(b);
      if (wait) await sleep(wait);
    },
  };
};

export const throttle = (fn: any, delay: number) => {
  let timeout = false;
  return (...args: any[]) => {
    if (!timeout) {
      timeout = true;
      fn.apply(this, args);
      setTimeout(() => {
        timeout = false;
      }, delay);
    }
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args);
    }, waitFor);
    return result;
  };
};
