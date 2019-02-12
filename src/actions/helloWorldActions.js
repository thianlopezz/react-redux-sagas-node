export const helloWorldAction1 = () => {
  return {
    type: "HELLO_1"
  };
};

export const helloWorldAction2 = data => {
  return {
    type: "HELLO_2",
    payload: data
  };
};
