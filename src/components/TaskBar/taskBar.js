import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const taskBar = props => {
  const {name, image, onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={image} style={styles.image} />
          <Text style={styles.text1}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default taskBar;
