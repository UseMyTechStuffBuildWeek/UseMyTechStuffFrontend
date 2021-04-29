import { axiosWithAuth } from '../axiosWithAuth';
import {
  ADD_FEATURE,
  NEW_USER_FEATURE,
  EDIT_FEATURE,
  LOGIN_FEATURE,
  GET_EQUIPMENT,
} from '../Actions/TechStuffActions';

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
  equipment: [],
};

export const techStuffReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        item: action.payload,
      };

    case NEW_USER_FEATURE:
      return {
        ...state,
        user: action.payload,
      };

    case GET_EQUIPMENT:
      return {
        ...state,
        equipment: [action.payload],
      };

    case EDIT_FEATURE:
      const editItem = state.item.find((item) => item.id === action.payload);
      return {
        ...state,
        item: action.payload,
      };

    case LOGIN_FEATURE:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
