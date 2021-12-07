import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box
} from '@material-ui/core';
import { getLocalDateFormat } from '../../shared/utils/utils';


const Item = ({ item }) => {
  const newsItemPostTime = getLocalDateFormat(item.time);
  return (
    <Box className="news-item">
      <div className="news-item__box-rating">
        <div className="rating up">{item.score}</div>
        <span>Points</span>
      </div>
      <div className="news-item__box-content">
        <h2>
          <Link to={`/item/${item.id}`} className={""}>
              {item.title}
          </Link>
        </h2>
        <div className="news-item__box-footer">
          <ul>
            <li>
              <i className="icon icon-user"></i>
              <span> {item.by} </span>
            </li>
            <li>
              <i className="icon icon-comment"></i>
              <span> 12 Comments </span>
            </li>
            <li>
              <i className="icon icon-time"></i>
              <span> {newsItemPostTime} hours ago </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="news-item__box-action">
        <a href={`/item/${item.id}`} className="button"> Open link </a>
      </div>
    </Box>
  );
};

export default Item;
