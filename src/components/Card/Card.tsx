import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Product} from '../../types';

const Card = ({item, actions}: {item: Product; actions: React.ReactNode}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>

      {actions}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
});

export default Card;
