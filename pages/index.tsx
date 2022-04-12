import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import NewsCard from '../src/components/NewsCard';
import palette from '../src/utils/palette';
import { getNews } from '../src/utils/api';

import { Oval } from 'react-loader-spinner';

import type { NextPage } from 'next';
import type { NewsPreview } from '../src/types/api';
import HeroCard from '../src/components/HeroCard';

const NewsWrapper = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const NewsContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: ${palette.container.maxWidth};
  padding-top: 40px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const LoadMoreButton = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: ${palette.colors.darkerBackground};
  border: 0;
  border-bottom: 4px solid ${palette.colors.contrast};
  color: ${palette.colors.contrast};

  &:hover {
    color: ${palette.colors.text};
    border-bottom: 4px solid ${palette.colors.text};
  }
`;

interface NewsProps {
  mainResult: NewsPreview;
  results: NewsPreview[];
  totalPages: number;
}

const News: NextPage<NewsProps> = ({ mainResult, results, totalPages }) => {
  const [news, setNews] = useState<NewsPreview[]>([]);
  const [nextPage, setNextPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (results?.length) {
      setNews([...results]);
    }
  }, [results]);

  const loadMoreNews = async () => {
    setIsLoading(true);

    const response = await fetch(`/api/news?page=${nextPage}`);
    const data = await response.json();

    setNews(prevState => [...prevState, ...data.results]);
    setNextPage(prevState => prevState + 1);
    setIsLoading(false);
  };

  return (
    <NewsWrapper>
      <Head>
        <title>GZ - News</title>
      </Head>
      <NewsContainer>
        <HeroCard
          body={mainResult.fields.body}
          key={mainResult.id}
          summary={mainResult.fields.trailText}
          thumbnail={mainResult.fields.thumbnail}
          title={mainResult.webTitle}
        />
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
        <ButtonContainer>
          {isLoading ? (
            <Oval
              color={palette.colors.text}
              secondaryColor={palette.colors.contrast}
              width={38}
              height={38}
            />
          ) : (
            <LoadMoreButton onClick={loadMoreNews}>
              Load more news
            </LoadMoreButton>
          )}
        </ButtonContainer>
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
      mainResult: results[0],
      results: results,
      totalPages: pages,
    },
  };
}
