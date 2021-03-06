import React from 'react';
import Item from '../item/item';
import Error from '../error/error';
import useItemList from '../../hooks/use-item-list';
import ContentLoader from '../loader/content-loader';

const ItemList = () => {
  const { sortedItems, loading, isFail } = useItemList();
  return (
    <div className="item-list">
      {loading ? (
        <ContentLoader />
      ) : isFail ? (
        <Error />
      ) : (
        sortedItems.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;
