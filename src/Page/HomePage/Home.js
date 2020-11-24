import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from './Data';

const Home = () => {
  return (
    <>
      {/* Hai */}
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  );
};

export default Home;
