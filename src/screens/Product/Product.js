import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header2, Urun, AddCart} from '../../components';
import DATA from '../../assets/DATA';
import {RouteNames} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Product = props => {
  const {route, navigation} = props;
  const {itemData} = route.params;

  return (
    <SafeAreaView style={{backgroundColor: '#363738', height: '100%'}}>
      <Header2 onPress1={() => navigation.goBack()} />
      <Urun itemData={itemData} />
      <AddCart itemData={itemData} />
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
