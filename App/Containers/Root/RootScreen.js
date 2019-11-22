import React, { Component } from 'react'
import NavigationService from '../../Services/NavigationService';
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import StartupActions from '../../Stores/Startup/Actions';
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Run the startup saga when the application is starting
    console.log("this.props", this.props);
    // this.props.startup()
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
            NavigationService.navigate('LoginScreen');
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

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
