import React from 'react';

import { Button } from '../../globalStyle';

// import { AiFillThunderbolt } from 'react-icons/ai';
import {
  GiCutDiamond,
  GiRock,
  GiCrystalBars,
  // GiFloatingCrystal,
} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>Rp. 199.000</PricingCardCost>
                <PricingCardLength>Per Month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New User</PricingCardFeature>
                  <PricingCardFeature>Rp.1.000.000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>Rp. 299.000</PricingCardCost>
                <PricingCardLength>Per Month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New User</PricingCardFeature>
                  <PricingCardFeature>Rp.1.500.000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>Rp. 399.000</PricingCardCost>
                <PricingCardLength>Per Month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Supports</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export { Pricing };
