import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
    marginLeft:windowWidth * 0.05,
    //marginRight:windowWidth * 0.05,
  },
});

export default styles;
