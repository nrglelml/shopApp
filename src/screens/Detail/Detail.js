import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Products} from '../../components';

const Detail = (props) => {
  const {route, navigation} = props;
  const {itemData} = route.params;
 
  return (
    <View>
      <Products data={itemData} navigation={navigation} />
    </View>
  );
};

export default Detail;
