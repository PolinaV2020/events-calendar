import axios from 'axios';
import {User} from "../../../models/User";
import {AuthActionEnum, SetAuthAction, SetUserAction, SetIsLoadingAction, SetErrorAction} from './types';
import {AppDispatch} from '../../index';

export const AuthActionCreators = {
  setUser: (user: User): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
  setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),

  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      const usersData = await axios.get<User[]>('./users.json');
      const mockUser = usersData.data.find(user => user.username === username && user.password === password);
      if(mockUser) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', mockUser.username);
        dispatch(AuthActionCreators.setUser(mockUser))
        dispatch(AuthActionCreators.setIsAuth(true))
      } else {
        dispatch(AuthActionCreators.setError('The user name or password is incorrect'))
      }
      dispatch(AuthActionCreators.setIsLoading(false))
    } catch(e){
      dispatch(AuthActionCreators.setError('Login error'))
    }
  },
  
  logout: () => async (dispatch: AppDispatch) => {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      dispatch(AuthActionCreators.setUser({} as User));
      dispatch(AuthActionCreators.setIsAuth(false));
  }
}