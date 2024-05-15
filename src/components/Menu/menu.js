import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
//import DATA from '../../assets/DATA';
import {RouteNames} from '../../config';
const menu = props => {
  const navigation = useNavigation();
  const {obje1, obje2, onPress1, onPress2, route} = props;

  const {DATA} = props;

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>New Arrivals</Text>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate(RouteNames.Detail, {itemData: DATA})
          }>
          <View>
            <Text style={styles.text2}>See All</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.view1}>
        <TouchableOpacity onPress={onPress1} styles={styles.touchable}>
          <Image source={{uri: obje1.image}} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress2} styles={styles.touchable}>
          <Image source={{uri: obje2.image}} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default menu;
