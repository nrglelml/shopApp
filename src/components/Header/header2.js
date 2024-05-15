import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {cart, camera, back} from '../../assets/icons/index';
import {RouteNames} from '../../config';
import {useNavigation} from '@react-navigation/native';
const header2 = props => {
  const {input,onPress1} = props;
  

  return (
    <View style={styles.view1}>
      <TouchableOpacity
        onPress={onPress1}>
        <View>
          <Image source={back} style={styles.icon2} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.text2}> Product Details </Text>
      </View>
      <View style={styles.view2}>
        <Image source={camera} style={styles.icon2} />
        <Image source={cart} style={styles.icon2} />
      </View>
    </View>
  );
};

export default header2;
