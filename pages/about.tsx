import type { NextPage } from 'next';

import Head from 'next/head';
import styled from 'styled-components';
import palette from '../src/utils/palette';

const AboutWrapper = styled.article`
  max-width: ${palette.container.maxWidth};
  height: calc(100% - 157px);
  margin: auto;
  padding: 40px;

  * {
    color: ${palette.colors.text};
  }

  h1,
  p {
    display: block;
    width: 100%;
  }
`;

const BlogLink = styled.a`
  font-weight: 900;
  font-size: 15px;

  &:hover {
    color: ${palette.colors.contrast};
  }
`;

const About: NextPage = () => {
  return (
    <AboutWrapper>
      <Head>
        <title>GZ - About</title>
      </Head>
      <p>
        This page was made to practice NextJS. The project was based on{' '}
        <BlogLink href="http://lagamerzone.blogspot.com/" target="_blank">
          La Gamer Zone blog
        </BlogLink>
        , a project on my first days of college
      </p>
    </AboutWrapper>
  );
};

export default About;
