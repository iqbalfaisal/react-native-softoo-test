import React, {useEffect} from 'react';
import {View, FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchProducts, addItemToBasket} from '../../store/actions';
import {Product} from '../../types';
import {Card} from '../../components';

const ProductScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch<any>();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToBasket = (item: Product) => {
    dispatch(addItemToBasket(item));
  };

  const renderProductItem = ({item}: {item: Product}) => (
    <Card
      item={item}
      actions={
        <Button title="Add to Basket" onPress={() => handleAddToBasket(item)} />
      }
    />
  );

  return (
    <View>
      <FlatList data={products} renderItem={renderProductItem} />
      <Button
        title="View Basket"
        onPress={() => navigation.navigate('Basket')}
      />
    </View>
  );
};

export default ProductScreen;
