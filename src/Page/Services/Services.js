import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { HomeObjFour } from '../HomePage/Data';

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...HomeObjFour} />
    </>
  );
};

export default Services;
