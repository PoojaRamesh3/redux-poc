export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const CHANGENAME = "CHANGENAME";

export function incrementCounter() {
  return {
    type: INCREMENT,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT,
  };
}

export function resetCounter() {
  return {
    type: RESET,
  };
}

export function changename(data: any) {
  return {
    type: CHANGENAME,
    payload: data,
  };
}
