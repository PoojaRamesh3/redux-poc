import { INCREMENT, DECREMENT, RESET, CHANGENAME } from "../action";

export interface StateProps {
  counter: number;
  defaultName: string;
}

const initialState: StateProps = {
  counter: 0,
  defaultName: "Pooja",
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return { ...state, counter: 0 };
    case CHANGENAME:
      return { ...state, defaultName: action.payload };
    default:
      return state;
  }
};
export default Reducer;
