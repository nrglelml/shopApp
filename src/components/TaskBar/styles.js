import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    //fontWeight: 'bold',
    alignItems: 'center',
    //justifyContent: 'center',
    // marginLeft: windowWidth * 0.03,
    marginRight: windowWidth * 0.04,
  },
  container: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.2,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.7,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: windowWidth * 0.1,
  },
  contText: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: 'black',
  },
  modal: {
    justifyContent: 'flex-end',
    width: windowWidth * 0.9,
    //height: windowWidth * 0.7,
    backgroundColor: 'white',
    marginBottom: windowWidth * 0.007,
    borderRadius: windowWidth * 0.7,
  },
  modalImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  modalText: {
    marginBottom: windowWidth * 0.02,
    color: 'black',
    alignSelf: 'center',
  },
  view2: {
    alignSelf: 'flex-start',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    //height:windowWidth*2,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    //marginTop: 22,
  },
  modalView: {
    margin: windowWidth * 0.02,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.02,
    padding: windowWidth * 0.035,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: windowWidth * 0,
      height: windowWidth * 0.002,
    },
    shadowOpacity: windowWidth * 0.0025,
    shadowRadius: windowWidth * 0.04,
    elevation: windowWidth * 0.05,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  minus: {
    backgroundColor: 'black',
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    //borderRadius:windowWidth*0.07,
    //alignItems:'center',
    //justifyContent:'center',
  },

  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
