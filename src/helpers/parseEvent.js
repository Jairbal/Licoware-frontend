export const parseEvent = (value, name, fn) => {
    let e = {
      target: {
        name,
        value,
      },
    };
    fn(e);
  };