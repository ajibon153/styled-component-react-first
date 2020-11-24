import React from 'react';
import { Link } from 'react-router-dom';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSection.elements';
import { Container, Button } from '../../globalStyle';

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  topLine,
  lightText,
  headline,
  description,
  img,
  alt,
  start,
}) => {
  // console.log('img', img);
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
        {/* <h1>Hai</h1> */}
      </InfoSec>
    </>
  );
};

export { InfoSection };
