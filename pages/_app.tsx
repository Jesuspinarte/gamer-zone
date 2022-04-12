import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment, useState } from 'react';

import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
);

export default MyApp;
