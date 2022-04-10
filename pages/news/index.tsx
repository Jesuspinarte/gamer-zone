import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import NewsCard from '../../src/components/NewsCard';
import palette from '../../src/utils/palette';
import { getNews } from '../../src/utils/api';

import type { NextPage } from 'next';
import type { NewsPreview } from '../../src/types/api';

const NewsWrapper = styled.article`
  display: flex;
  justify-content: center;
`;

const NewsContainer = styled.section`
  width: 100%;
  max-width: ${palette.container.maxWidth};
`;

// styled.``

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
    <NewsWrapper>
      <Head>
        <title>GZ - News</title>
      </Head>
      <NewsContainer>
        {news.map(n => (
          <NewsCard
            body={n.fields.body}
            key={n.id}
            summary={n.fields.trailText}
            thumbnail={n.fields.thumbnail}
            title={n.webTitle}
          />
        ))}
      </NewsContainer>
      {nextPage < totalPages && (
        <div>
          <button onClick={loadMoreNews}>Load more news</button>
        </div>
      )}
    </NewsWrapper>
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
