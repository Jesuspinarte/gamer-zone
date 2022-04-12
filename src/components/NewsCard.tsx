/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react';

import styled from 'styled-components';
import palette from '../utils/palette';

import NewsModal from './NewsModal';
import cliTruncate from 'cli-truncate';

const NewsCardWrapper = styled.article`
  display: inline-block;
  width: calc(50% - 15px);
  margin-bottom: 20px;
  cursor: pointer;

  &:nth-child(even) {
    margin-right: 30px;
  }
`;

const ModalContent = styled.div`
  padding: 0 60px;
`;

const ModalTitle = styled.h1`
  padding: 40px 60px 30px 60px;
  background-color: ${palette.colors.background};
`;

const NewsTitle = styled.h4`
  padding: 10px;
  background-color: ${palette.colors.secondaryBackground};
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0 5px 12px rgb(0 0 0 / 70%);
  border-radius: 4px;
  margin-bottom: 10px;
  color: ${palette.colors.lightText};
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: 0 5px 12px rgb(0 0 0 / 70%);
  border-radius: 8px;
  background-color: ${palette.colors.secondaryBackground};

  img,
  p {
    max-width: calc(50% - 5px);
  }

  img {
    margin-right: 10px;
    border-radius: 8px 0 0 8px;
  }

  p {
    color: ${palette.colors.text};
    padding: 10px;
    font-size: 14px;
  }
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
    <Fragment>
      <NewsCardWrapper onClick={() => setShowContent(true)}>
        <NewsTitle>{cliTruncate(title, 40)}</NewsTitle>
        <Content>
          <img src={thumbnail} alt={title} />
          <p>{summary}</p>
        </Content>
      </NewsCardWrapper>
      <NewsModal
        isOpen={showContent}
        contentLabel="onRequestClose Arcivle"
        onRequestClose={() => setShowContent(false)}
        ariaHideApp={false}
      >
        <ModalTitle>{title}</ModalTitle>
        <img
          src={thumbnail.replace('500.jpg', '1000.jpg')}
          alt={title}
          width="100%"
        />
        <ModalContent
          dangerouslySetInnerHTML={{
            __html: body.replace(/<iframe.*?>.*?<\/iframe>/gi, ''),
          }}
        />
      </NewsModal>
    </Fragment>
  );
};

export default NewsCard;
