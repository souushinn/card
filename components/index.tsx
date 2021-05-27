import React from 'react';
import MyCard from './Mycard';
import Header from '../common/Header';

class TopPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MyCard />
      </>
    );
  }
}
export default TopPage;
