import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

import Nav from '../src/components/Nav';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Nav />
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
