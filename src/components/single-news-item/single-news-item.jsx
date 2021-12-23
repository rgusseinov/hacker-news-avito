import React from 'react';
import Error from '../error/error';
import Comments from '../comments/comments';
import useNewsItem from '../../hooks/use-news-item';
import ContentLoader from '../loader/content-loader';
import '../../scss/components/single-news.sass';

const SingleNewsItem = () => {
  const { item, postTime, loading, isItemsFailed } = useNewsItem();

  return (
    <div>
      {loading ? (
        <ContentLoader />
      ) : isItemsFailed ? (
        <Error />
      ) : (
        <>
          <div className="single-news">
            <div className="single-news__header">
              <div className="row">
                <a href={item?.url}>
                  <h1 className="title">{item?.title}</h1>
                </a>
              </div>
              <div className="row">
                <div className="news-item__box-footer">
                  <ul className="news-meta">
                    <li>
                      <i className="icon icon-rating"></i>
                      <span>{item?.score} points </span>
                    </li>
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
