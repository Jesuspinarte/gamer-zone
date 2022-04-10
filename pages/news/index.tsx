import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';

import NewsCard from '../../src/components/NewsCard';
import { getNews } from '../../src/utils/api';

import type { NextPage } from 'next';
import { NewsPreview } from '../../src/types/api';

interface NewsProps {
  results: NewsPreview[];
  totalPages: number;
}

const News: NextPage<NewsProps> = ({ results, totalPages }) => {
  const [news, setNews] = useState<NewsPreview[]>([]);
  const [nextPage, setNextPage] = useState(2);

  useEffect(() => {
    if (results?.length) {
      setNews([...results]);
    }
  }, [results]);

  const loadMoreNews = async () => {
    const response = await fetch(`/api/news?page=${nextPage}`);
    const data = await response.json();
    setNews(prevState => [...prevState, ...data.results]);
    setNextPage(prevState => prevState + 1);
  };

  return (
    <article>
      <Head>
        <title>GZ - News</title>
      </Head>

      <section>
        {news.map(n => (
          <NewsCard
            body={n.fields.body}
            key={n.id}
            summary={n.fields.trailText}
            thumbnail={n.fields.thumbnail}
            title={n.webTitle}
          />
        ))}
      </section>
      {nextPage < totalPages && (
        <button onClick={loadMoreNews}>Load more news</button>
      )}
    </article>
  );
};

export default News;

export async function getServerSideProps() {
  const response = await fetch(getNews(1));
  const {
    response: { pages, results },
  } = await response.json();

  return {
    props: {
      results: results,
      totalPages: pages,
    },
  };
}
