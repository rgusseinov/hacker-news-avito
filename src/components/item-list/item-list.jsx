import React from 'react';
import Item from '../item/item';
import Loader from '../loader/loader';
import Error from '../error/error';
import useItemList from '../../hooks/use-item-list';

const ItemList = () => {
  const { newsArray, loading, isFail } = useItemList();
  return (
    <div className="item-list">
      {loading ? (
        <Loader />
      ) : isFail ? (
        <Error />
      ) : (
        newsArray.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;
