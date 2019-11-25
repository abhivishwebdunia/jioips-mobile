import { authConstants } from '../Constants'
import { httpService, encryptDecrypt, storageService } from '../Services'
import { loading,alertActions } from './LoaderActions';
import { history } from '../Helpers'

export const AuthActions = {
  login,
  logout,
  register,
}

function login(username, password) {
  console.log('username', username)
  return (dispatch) => {
    
    console.log('username', dispatch)
    dispatch(loading(true))
    dispatch(request({ username }))
    password = encryptDecrypt.sha512Encrypt(password)
    httpService.apiPost('/login', { username: username, password: password }).then(
      (user) => {
        console.log('user', user)
        if (user.success) {
          dispatch(success(user))
          storageService.setLogin(user.data)
          history.push('/dashboard')
        }
        dispatch(loading(false))
      },
      (error) => {
        console.log('lgin error', error)
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
        dispatch(loading(false))
      }
    )
  }

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  httpService.logout()
  return { type: authConstants.LOGOUT }
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user))

    httpService.apiPost('', user).then(
      (user) => {
        dispatch(success())
        history.push('/login')
        dispatch(alertActions.success('Registration successful'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: authConstants.REGISTER_REQUEST, user }
  }
  function success(user) {
    return { type: authConstants.REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: authConstants.REGISTER_FAILURE, error }
  }
}
