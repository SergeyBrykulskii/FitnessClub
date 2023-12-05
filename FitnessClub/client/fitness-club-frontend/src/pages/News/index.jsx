import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./News.module.scss";
import { fetchNews } from "../../redux/slices/news";

export const News = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => {
    console.log(state);
    return state.news;
  });
  const isNewsLoading = news.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div>
      <h1>News</h1>
      {isNewsLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.newsList}>
          {news.items.map((item) => (
            <div key={item.title} className={styles.newsItem}>
              <h2>{item.title}</h2>
              <p>{item.preview}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};