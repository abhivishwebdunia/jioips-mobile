import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { AuthActions } from '../../Actions/';
import { Button } from 'react-native-elements';
import LoaderComponent from '../../Components/LoaderComponent';

class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      pass: null,
    }
  }

  doLogin() {
    let { user, pass } = this.state
    this.props.login(user, pass)
  }

  render() {
    let { hasError, isLogged, isLoading } = this.props
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <LoaderComponent></LoaderComponent>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>JIOIPS</Text>
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.doLogin()}
                title="Login"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.onFbLoginPress()}
                title="Login with Facebook"
                color="#3897f1"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: false,
    hasError: false,
    isLoading: false,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(AuthActions.login(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
