import {TouchableOpacity, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {heart, heart2} from '../../assets/icons';

const urun = props => {
  const {itemData} = props;
  //const {itemData} = route.params;
  const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View>
      <Image source={{uri: itemData.image}} style={styles.slide} />
      <View style={styles.view1}>
        <Text style={styles.itemName}>{itemData.title}</Text>
        <TouchableOpacity onPress={toggleHeart}>
          <Image source={isLiked ? heart2 : heart} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.itemPrice}>$ {itemData.price}</Text>
      <Text style={styles.itemDescription}>{itemData.description}</Text>
      <View style={styles.view1}>
        <Text style={styles.itemDescription}>Size:</Text>
        <Text style={styles.yazi}>S</Text>
        <Text style={styles.itemDescription}>M</Text>
        <Text style={styles.yazi}>L</Text>
      </View>
    </View>
  );
};

export default urun;
