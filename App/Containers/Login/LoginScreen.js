import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style'
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from 'react-native'
import { AuthActions } from '../../Actions'
import { Button } from 'react-native-elements'
import LoaderComponent from '../../Components/LoaderComponent'

class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
    }
  }

  doLogin() {
    let { username, password } = this.state;
    this.props.login(username, password)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
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
                value={this.state.username}
                onChange={(e) => this.handleChange(e)}
                name="username"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
                name="password"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.doLogin()}
                title="Login"
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
