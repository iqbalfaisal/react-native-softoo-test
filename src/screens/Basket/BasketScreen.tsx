import React, {useMemo} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {BasketItem} from '../../types';
import {removeItemFromBasket, editQuantity} from '../../store/actions';
import {Card} from '../../components';

const BasketScreen = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();

  const handleRemoveItem = (item: BasketItem) => {
    dispatch(removeItemFromBasket(item));
  };

  const handleQuantity = (item: BasketItem, quantity: number) => {
    dispatch(editQuantity(item, quantity));
  };

  const renderItem = ({item}: {item: BasketItem}) => (
    <Card
      item={item}
      actions={
        <>
          <View style={styles.basketItemQuantity}>
            <Text
              style={styles.action}
              disabled={item.quantity === 1}
              onPress={() => handleQuantity(item, item.quantity - 1)}>
              -
            </Text>
            <Text style={styles.basketItemQuantityText}>{item.quantity}</Text>
            <Text
              style={styles.action}
              onPress={() => handleQuantity(item, item.quantity + 1)}>
              +
            </Text>
          </View>
          <Text
            style={styles.basketItemRemove}
            onPress={() => handleRemoveItem(item)}>
            Remove
          </Text>
        </>
      }
    />
  );

  const total = useMemo(
    () =>
      basket.reduce(
        (acc: number, item: BasketItem) => acc + item.price * item.quantity,
        0,
      ),
    [basket],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={basket}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.total}>{`Total: $${total.toFixed(2)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  basketItemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  basketItemQuantityText: {
    fontSize: 16,
    paddingHorizontal: 30,
  },
  action: {
    fontSize: 28,
    color: 'red',
  },
  basketItemRemove: {
    fontSize: 16,
    color: 'red',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default BasketScreen;
