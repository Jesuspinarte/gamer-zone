/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react';

import styled from 'styled-components';

import NewsModal from './NewsModal';

import palette from '../utils/palette';

interface HeroCardProps {
  body: string;
  summary: string;
  thumbnail: string;
  title: string;
}

const HeroCardWrapper = styled.article`
  width: 100%;
  margin-bottom: 30px;
  background-color: ${palette.colors.background};
  padding: 20px;
  box-shadow: 4px 4px 4px 1px rgb(0 0 0 / 20%);
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  * {
    color: ${palette.colors.text};
  }
`;

const ModalContent = styled.div`
  padding: 0 60px;
`;

const ModalTitle = styled.h1`
  padding: 40px 60px 30px 60px;
  background-color: ${palette.colors.background};
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 100%;
`;

const InfoBar = styled.div`
  position: absolute;
  margin: 20px;
  padding: 20px;
  bottom: 0;
  left: 0;
  width: calc(100% - 40px);
  background-color: rgba(34, 34, 34, 0.6);

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const HeroCard: React.FC<HeroCardProps> = ({
  body,
  summary,
  thumbnail,
  title,
}) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Fragment>
      <HeroCardWrapper onClick={() => setShowContent(true)}>
        <HeroImage src={thumbnail.replace('500.jpg', '2000.jpg')} alt={title} />
        <InfoBar>
          <h3>{title}</h3>
          <p>{summary}</p>
        </InfoBar>
      </HeroCardWrapper>
      <NewsModal
        isOpen={showContent}
        contentLabel="onRequestClose Article"
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

export default HeroCard;
