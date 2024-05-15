import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  container: {
    //flex: 1,
    // margin: windowWidth * 0.01,
    backgroundColor: '#363738',
    // borderRadius: windowWidth * 0.05,
    padding: windowWidth * 0.03,
    alignItems: 'center',
  },
  header: {
    fontSize: windowWidth * 0.06,
    //fontWeight: 'bold',
    color: 'white',
    marginTop: windowWidth * 0.02,
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
    fontSize: windowWidth * 0.03,
    fontWeight: 'bold',
    color: 'white',
  },
  itemImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: windowWidth * 0.05,
  },
  itemDescription: {
    fontSize: windowWidth * 0.03,
    color: 'white',
  },
  itemPrice: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'white',
    marginTop: windowWidth * 0.01,
  },
});
