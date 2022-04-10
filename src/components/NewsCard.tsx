import { useState } from 'react';
import styled from 'styled-components';

import palette from '../../src/utils/palette';

const NewsCardWrapper = styled.article`
  display: inline-block;
  width: calc(50% - 20px);
  margin-right: 20px;
`;

interface NewsCardProps {
  body: string;
  summary: string;
  thumbnail: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  body,
  summary,
  thumbnail,
  title,
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <NewsCardWrapper>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{summary}</p>
      <button onClick={() => setShowContent(prevState => !prevState)}>
        {!showContent ? 'Read' : 'Close'}
      </button>
      {showContent && <div dangerouslySetInnerHTML={{ __html: body }} />}
    </NewsCardWrapper>
  );
};

export default NewsCard;
