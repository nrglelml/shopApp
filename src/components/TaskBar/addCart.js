import {
  Alert,
  Modal,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const AddCart = props => {
  const {itemData} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setTotalPrice(totalPrice + itemData.price);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
      setTotalPrice(totalPrice - itemData.price);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Cart is approved.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.view3}>
              <View style={styles.view2}>
                <Image
                  source={{uri: itemData.image}}
                  style={styles.modalImage}
                />
                <Text style={styles.modalText}>{itemData.title}</Text>
              </View>
              <View>
                <View style={styles.view1}>
                  <TouchableOpacity onPress={removeFromCart}>
                    <View style={styles.minus}>
                      <Text style={styles.textStyle2}>-</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.modalText}>{cartCount}</Text>
                  </View>
                  <TouchableOpacity onPress={addToCart}>
                    <View style={styles.minus}>
                      <Text style={styles.textStyle2}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={styles.contText}>
                  Total Price: ${totalPrice.toFixed(2)}
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.modal}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
        <Text style={styles.contText}>Add To Cart</Text>
      </Pressable>
    </View>
  );
};

export default AddCart;
