import React from 'react';
import { Link } from 'react-router-dom';
import { getNewsPostTime } from '../../shared/utils/time';
import '../../scss/components/item.sass';

const Item = ({ item }) => {
  const postTime = getNewsPostTime(item.time);

  return (
    <div className="news-item">
      <div className="news-item__box-rating">
        <div className="rating up">{item.score}</div>
        <span>Points</span>
      </div>
      <div className="news-item__box-content">
        <a href={`${item.url}`} target="_blank" rel="noreferrer">
          <h2> {item.title} </h2>
        </a>
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
              <span> {postTime} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="news-item__box-action">
        <a href={`${item.url}`} target="_blank" rel="noreferrer">Open link</a>
      </div>
    </div>
  );
};

export default Item;
