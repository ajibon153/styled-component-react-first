import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterSubcription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcons,
  WebsiteRights,
  SocialIconsLink,
} from './Footer.elements';

import { Button } from '../../globalStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubcription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubs at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubcription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonial</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonial</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Video</FooterLinkTitle>
            <FooterLink to='/sign-up'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonial</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/sign-up'>How It Works</FooterLink>
            <FooterLink to='/'>Testimonial</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA @ 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconsLink href='/' target='_blank' arial-label='Facebook'>
              <FaFacebook />
            </SocialIconsLink>
            <SocialIconsLink href='/' target='_blank' arial-label='Instagram'>
              <FaInstagram />
            </SocialIconsLink>
            <SocialIconsLink
              href='/'
              target='_blank'
              arial-label='Youtube'
              rel='noopener noreferrer'
            >
              <FaYoutube />
            </SocialIconsLink>
            <SocialIconsLink href='/' target='_blank' arial-label='Twitter'>
              <FaTwitter />
            </SocialIconsLink>
            <SocialIconsLink href='/' target='_blank' arial-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconsLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export { Footer };
