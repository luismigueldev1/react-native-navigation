import React, {useReducer} from 'react';
import {createContext} from 'react';
import {authReducer} from './authReducer';

//Definir como luce o que informacion va a llevar aqui
export interface AuthState {
  isLogin: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
  isLogin: false,
};

//Lo usuaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  setFavoriteIcon: (iconName: string) => void;
  setUsername: (username: string) => void;
}

//crear context
export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({children}: any) {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => {
    dispatch({
      type: 'signIn',
    });
  };
  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  const setFavoriteIcon = (iconName: string) => {
    dispatch({
      type: 'setFavoriteIcon',
      payload: iconName,
    });
  };

  const setUsername = (username: string) => {
    dispatch({
      type: 'setUsername',
      payload: username,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        setFavoriteIcon,
        logout,
        setUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
