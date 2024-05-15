import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    width: windowWidth * 0.9,
    height: windowWidth * 0.7,
    marginTop: windowWidth * 0.04,
    borderRadius: windowWidth * 0.07,
  },
  itemContainer: {
    margin: windowWidth * 0.01,
    backgroundColor: '#5b5b5c',
    borderRadius: windowWidth * 0.05,
    //padding: windowWidth * 0.03,
    alignItems: 'center',
    width: windowWidth * 0.45,
    // height: windowWidth * 0.5,
  },
  itemName: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: 'white',
  },

  itemDescription: {
    marginTop: windowWidth * 0.05,
    fontSize: windowWidth * 0.035,
    color: 'white',
  },
  itemPrice: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: '#9091e0',
    marginTop: windowWidth * 0.01,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    marginTop: windowWidth * 0.015,
    marginRight: windowWidth * 0.02,
  },
  yazi:{
    opacity: 0.5,
    marginTop: windowWidth * 0.05,
    fontSize: windowWidth * 0.035,
    color: 'white',
  }
});
