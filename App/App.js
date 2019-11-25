import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './Stores'
import RootScreen from './Containers/Root/RootScreen'
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui'

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
}

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}

        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <RootScreen />
        </ThemeContext.Provider>
      </Provider>
    )
  }
}
