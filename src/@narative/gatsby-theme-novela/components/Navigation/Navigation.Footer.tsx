import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery, Link } from "gatsby";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";

import mediaqueries from "@styles/media";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
            }
          }
        }
      }
    }
  }
`;

function Footer() {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  return (
    <>
      <FooterGradient />
      <Section narrow>
        <HoritzontalRule />
        <FooterContainer>
          <FooterText>
            © {new Date().getFullYear()} {name} | <StyledLink to="/about">About us</StyledLink> | <StyledLink to="/contact">Contact</StyledLink>
          </FooterText>
          <div>
            <SocialLinks links={social} />
            <a href="https://www.netlify.com" rel="noopener noreferrer"><Sponsor src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys on Netlify" title="Deploys on Netlify" /></a>
          </div>
        </FooterContainer>
      </Section>
    </>
  );
}

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`

  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;

const StyledLink = styled(Link)`
  color: inherit;
`;


const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const Sponsor = styled.img`
  margin-left: 20px;
  height: 32px;
`;
