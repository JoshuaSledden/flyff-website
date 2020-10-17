import defaultTheme from '../theme';

const initialState = {
  theme: defaultTheme
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_THEME': {
      return {
        ...state
      };
    }
    default: {
      return {
        ...initialState
      };
    }
  }
};

export default reducer;
