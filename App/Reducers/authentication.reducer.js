import { loginConstants } from '../_constants';
import { AsyncStorage } from 'react-native';
let user = JSON.parse(AsyncStorage.getItem('user'));
let initialState = { loggedIn: (user)?true:false,loggingIn:false, authData:user,success:null };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {...state,
        loggingIn: true,
      };
    case loginConstants.LOGIN_SUCCESS:
      return {...state,
        loggedIn: true,
        loggingIn:false,
        success:true,
        authData: action.authData
      };
    case loginConstants.LOGIN_FAILURE:
      return {...state,loggedIn:false,success:false,authData:{},loggingIn:false};
    case loginConstants.LOGOUT:
      return {...state,success:null,authData:null};
    default:
      return state
  }
}