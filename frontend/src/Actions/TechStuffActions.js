import { axiosWithAuth } from '../axiosWithAuth';
export const ADD_FEATURE = 'ADD_FEATURE';
export const NEW_USER_FEATURE = 'NEW_USER_FEATURE';
export const EDIT_FEATURE = 'EDIT_FEATURE';
export const LOGIN_FEATURE = 'LOGIN_FEATURE';
export const GET_EQUIPMENT = 'GET_EQUIPMENT';

export const addFeature = (newFeature) => {
  return { type: ADD_FEATURE, payload: newFeature };
};

export const getEquipment = (equipment) => {
  return { type: GET_EQUIPMENT, payload: equipment };
};

export const newUserFeature = (newUser) => {
  return { type: NEW_USER_FEATURE, payload: newUser };
};

export const editFeature = (editedFeature) => {
  return { type: EDIT_FEATURE, payload: editedFeature };
};

export const loginFeature = (loginSuccess) => {
  return { type: LOGIN_FEATURE, payload: loginSuccess };
};
