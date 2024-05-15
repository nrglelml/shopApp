import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {search, camera} from '../../assets/icons/index';

const header = props => {
  const {input} = props;
  return (
    <View style={styles.view1}>
      <View>
        <Text style={styles.text1}>The</Text>
        <Text style={styles.text1}>Dubai</Text>
        <Text style={styles.text1}>Mall</Text>
      </View>
      <View style={styles.searchBox}>
        <Image source={search} style={styles.icon} />
        <View>
        <TextInput
            secureTextEntry={input}
            style={styles.input}
            placeholder="What Are You Looking For?"
          />
        </View>
      </View>
      <View>
        <Image source={camera} style={styles.icon2} />
      </View>
    </View>
  );
};

export default header;
