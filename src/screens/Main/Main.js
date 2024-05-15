import {SafeAreaView, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, ProductSlide, Menu, TaskBar} from '../../components/index';
import DATA from '../../assets/DATA';
import {agenda, cart, user, home} from '../../assets/icons';
import styles from './styles';
import {RouteNames} from '../../config';

const Main = props => {
  const {navigation, route} = props;
  //const navigation = useNavigation();
  const obje1 = DATA[1];
  const obje2 = DATA[2];
  //const route = useRoute();
  //console.log('data inmain', DATA)
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#363738', height: '100%'}}>
        <Header />
        <ProductSlide />
        <Menu
          obje1={obje1}
          obje2={obje2}
          onPress1={() => {
            navigation.navigate(RouteNames.Product, {itemData: obje1});
          }}
          onPress2={() => {
            navigation.navigate(RouteNames.Product, {itemData: obje2});
          }}
          route={route}
          DATA={DATA}
        />
        <View style={styles.view1}>
          <TaskBar
            image={home}
            name="Home"
            onPress={() => {
              navigation.navigate(RouteNames.Main);
            }}
          />
          <TaskBar
            image={agenda}
            name="Categories"
            onPress={() => {
              navigation.navigate(RouteNames.Detail, {itemData: DATA});
            }}
          />
          <TaskBar
            image={cart}
            name="Cart"
            onPress={() => {
              navigation.navigate(RouteNames.Product, {itemData: obje2});
            }}
          />
          <TaskBar image={user} name="Account" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Main;
