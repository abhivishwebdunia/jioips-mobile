import React, { Component } from 'react'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { View, Text } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { BottomNavigation } from 'react-native-material-ui'
class RootScreen extends Component {
  constructor(props) {
    super(props)
    this.state={active:'login'};
  }
  componentDidMount() {
    // Run the startup saga when the application is starting
  }

  navigateScreen = (key,text) => {
    console.log("ddd",key,text);
    this.setState({active:key});
    NavigationService.navigate(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <BottomNavigation active={this.state.active} hidden={false}>
          <BottomNavigation.Action
            key="login"
            icon="login"
            label="Login"
            onPress={() => this.navigateScreen('login','LoginScreen')}
          />
          <BottomNavigation.Action
            key="forgot-password"
            icon="people"
            label="Forgot Password"
            onPress={() => this.navigateScreen('forgot-password','ForgotPasswordScreen')}
          />
        </BottomNavigation>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
            NavigationService.navigate('LoginScreen')
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(RootScreen)
