import React from 'react';
import './Articles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

function Articles() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=465543691c9444e69ac401dcb442d179'
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <div className='page-wrap'>
        <div className='article-sidebar'>
          <div className='article-grid'>
            {news.map((item, i) => (
              <article>
                <img src={item.urlToImage} alt='' />
                <div>
                  <h3> {item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={item.url}
                    onClick={() => openInNewTab(item.url)}
                    className='Read-more'
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
