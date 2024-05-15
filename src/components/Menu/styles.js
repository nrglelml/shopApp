import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    marginTop: windowWidth * 0.07,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.04,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
   
  },
  text1: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontSize: windowWidth * 0.04,
    color: 'white',
    textDecorationLine: 'underline',
    marginLeft: windowWidth * 0.45,
  },
  image: {
    width: windowWidth * 0.43,
    height: windowWidth * 0.5,
    //borderRadius: windowWidth * 0.05,
  },

  touchable: {
    width: '100%',
  },
});
