import { AsyncStorage } from 'react-native'

export const storageService = {
  setData,
  getData,
  setLogin,
  getLogin,
  isLoggedIn,
  logoutSession,
  deleteData,
}

function setData(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  AsyncStorage.setItem(key, value)
}

function getData(key, value) {
  return AsyncStorage.getItem(key, value)
}

function setLogin(loginData) {
  this.setData('authData', loginData.Data)
  this.setData('authToken', loginData.Data.token)
}

function getLogin() {}

function logoutSession() {
  this.deleteData('authData')
  this.deleteData('authToken')
}

function isLoggedIn() {
  if (AsyncStorage.getItem('authData')) {
    return true
  }
  return false
}

function deleteData(key) {
  AsyncStorage.removeItem(key)
}
