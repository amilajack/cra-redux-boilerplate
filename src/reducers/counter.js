import * as actions from '../actions/counter';

export default function counterReducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      };
    }

    case actions.DECREMENT: {
      return {
        ...state,
        count: state.count - 1
      };
    }

    default: {
      return {
        count: 0
      };
    }
  }
}
