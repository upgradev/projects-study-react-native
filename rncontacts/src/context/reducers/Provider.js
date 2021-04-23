import React, {createContext, useReducer} from 'react';
import auth from './auth';
import authInitialState from '../initialStates/authState';
import contacts from './contacts';
import contactsInitialState from '../initialStates/contactsInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;