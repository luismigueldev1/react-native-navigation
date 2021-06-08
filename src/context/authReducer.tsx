import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'setFavoriteIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'setUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLogin: true,
        username: 'no-username-set',
      };

    case 'setFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLogin: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
