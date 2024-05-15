import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {RouteNames} from '../../config';
const products = props => {
  const [numColumns, setNumColumn] = useState(2);
  const {route, navigation} = props;
  const {data} = props;

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(RouteNames.Product, {itemData: item})}
      style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.title}</Text>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>Price: {item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products</Text>
      <View>
        <FlatList
          numColumns={numColumns}
          renderItem={renderItem}
          data={data}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default products;
