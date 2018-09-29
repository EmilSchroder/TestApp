import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  ImageBackground
 } from 'react-native';

export default class LinksScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links',
  // };

  render() {
    return (
      <ImageBackground style={styles.landing} source={require('../assets/images/neko-atsume.jpg')} resizeMode='cover'>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  landing:{
    height: '100%'
  }
});
