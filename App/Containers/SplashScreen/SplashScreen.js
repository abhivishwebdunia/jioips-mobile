import React from 'react'
import { Text, View,Image } from 'react-native'
import styles from './SplashScreenStyle'
import NavigationService from '../../Services/NavigationService'
export default class SplashScreen extends React.Component {
  
  componentDidMount() {
    // NavigationService.navigate('LoginScreen')
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          {/* You will probably want to insert your logo here */}
          <Image source={require('../../Assets/Images/logo.png')}></Image>
        </View>
      </View>
    )
  }
}
