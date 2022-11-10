// initialState

import {
    FAIL_CONATCTS,
    GET_CONTACT,
    GET_CONTACTS,
    LOAD_CONTACTS,
  } from "../ACTIONTYPES/contact";
  
  const initialState = {
    listContacts: [],
    errors: null,
    load: false,
    contactToGet: {},
  };
  
  // pure functions
  
  const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_CONTACTS:
        return { ...state, load: true };
      case GET_CONTACTS:
        return { ...state, load: false, listContacts: payload.listContacts };
      case GET_CONTACT:
        return { ...state, load: false, contactToGet: payload.contactToGet };
      case FAIL_CONATCTS:
        return { ...state, load: false, errors: payload };
      default:
        return state;
    }
  };
  
  export default contactReducer;