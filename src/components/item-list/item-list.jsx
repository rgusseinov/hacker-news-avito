import React from 'react';
import Item from '../item/item';
import Loader from '../loader/loader';
import Error from '../error/error';
import useItemList from '../../hooks/use-item-list';
import { Container } from '@material-ui/core';

const ItemList = () => {
  const { newsArray, loading, isFail } = useItemList();
  return (
    <Container maxWidth="lg">
      {loading ? (
        <Loader />
      ) : isFail ? (
        <Error />
      ) : (
        newsArray.map((item) => <Item key={item.id} item={item} />)
      )}
    </Container>
  );
};

export default ItemList;
