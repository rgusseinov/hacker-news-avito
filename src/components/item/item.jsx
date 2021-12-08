import React from 'react';
import { Link } from 'react-router-dom';
import { getLocalDateFormat } from '../../shared/utils/utils';
import '../../scss/components/news-item.sass';


const Item = ({ item }) => {
  const newsItemPostTime = getLocalDateFormat(item.time);
  return (
    <div className="news-item">
      <div className="news-item__box-rating">
        <div className="rating up">{item.score}</div>
        <span>Points</span>
      </div>
      <div className="news-item__box-content">
        <Link to={`/item/${item.id}`}>
          <h2> {item.title} </h2>
        </Link>
        <div className="news-item__box-footer">
          <ul>
            <li>
              <i className="icon icon-user"></i>
              <span> {item.by} </span>
            </li>
            <li>
              <Link to={`/item/${item.id}`}>
                <i className="icon icon-comment"></i>
                <span> {item.descendants} Comments </span>
              </Link>
            </li>
            <li>
              <i className="icon icon-time"></i>
              <span> {newsItemPostTime} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="news-item__box-action">
        <Link to={`/item/${item.id}`}>Open link</Link>
      </div>
    </div>
  );
};

export default Item;
