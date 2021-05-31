import React from 'react';
import TopPage from '../components/index';

const HomePage = () => {
  return (
    <>
      <TopPage />
    </>
  );
};

HomePage.getInitialProps = async () => {
  return {};
};

export default HomePage;
