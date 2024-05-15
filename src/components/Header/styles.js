import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {search} from '../../assets/icons';
const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: windowWidth * 0.9,
    backgroundColor: 'black',
    height: windowWidth * 0.3,
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
    borderRadius: windowWidth * 0.07,
  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    // marginLeft: windowWidth * 0.05,
  },
  searchBox: {
    backgroundColor: 'black',
    width: windowWidth * 0.65,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.07,
    borderColor: 'white',
    borderWidth: windowWidth * 0.005,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    tintColor: 'white',
    alignSelf: 'flex-start',
    marginLeft: windowWidth * 0.03,
    marginTop: windowWidth * 0.09,
  },
  icon2: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    tintColor: 'white',
  },
  input: {
    color: 'white',
    flex: 1,
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    fontSize: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: windowWidth * 0.05,
    //marginRight: windowWidth * 0.05,
  },
});
