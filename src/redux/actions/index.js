export const ADD_ROOM = 'ADD_ROOM';
export const REMOVE_ROOM = 'REMOVE_ROOM';
export const SET_USERNAME = 'SET_USERNAME';
export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';

export const setUsername = name => ({
  type: SET_USERNAME,
  name
});

export const addRoom = (key, name) => ({
  type: ADD_ROOM,
  key,
  name
});

export const removeRoom = key => ({
  type: REMOVE_ROOM,
  key
});

export const openWindow = roomKey => ({
  type: OPEN_WINDOW,
  roomKey
});

export const closeWindow = roomKey => ({
  type: CLOSE_WINDOW,
  roomKey
});
