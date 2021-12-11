import React from 'react';
import Comments from '../comments/comments';
import useNewsItem from '../../hooks/use-news-item';
import Loader from '../loader/loader';
import Error from '../error/error';
import '../../scss/components/single-news.sass';
import { getNewsPostTime } from '../../shared/utils/time';

const SingleNewsItem = () => {
  const { item, loading, isItemsFailed } = useNewsItem();
  const postTime = getNewsPostTime(item?.time);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : isItemsFailed ? (
        <Error />
      ) : (
        <>
          <div className="single-news">
            <div className="single-news__header">
              <div className="row">
                <a href="#">
                  <h1 className="title">{item?.title}</h1>
                </a>
              </div>
              <div className="row">
                <div className="news-item__box-footer">
                  <ul>
                    <li>
                      <i className="icon icon-user"></i>
                      <span>{item?.by}</span>
                    </li>
                    <li>
                      <i className="icon icon-time"></i>
                      <span>{postTime} ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-news__comments">
              <Comments />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleNewsItem;
