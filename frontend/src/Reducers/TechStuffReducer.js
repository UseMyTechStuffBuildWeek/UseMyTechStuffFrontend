import {
  ADD_FEATURE,
  NEW_USER_FEATURE,
  EDIT_FEATURE,
  LOGIN_FEATURE,
} from '../actions/TechStuffActions';

const initialState = {
  user: {
    username: '',
    password: '',
  },
  item: {
    name: '',
    imgURL: '',
    description: '',
  },
};

export const techStuffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        item: [...state.item, action.payload],
      };

    case NEW_USER_FEATURE:
      return {
        ...state,
        user: [action.payload],
      };

    case EDIT_FEATURE:
      const editItem = state.item.find((item) => item.name === action.payload);
      return {
        ...state,
        item: [...state.item, action.payload],
      };

    case LOGIN_FEATURE:
      return {
        ...state,
        user: [action.payload],
      };
  }
};
