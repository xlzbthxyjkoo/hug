import React from 'react';
import styled from 'styled-components';
import bannerImage from './image/배너2.png';

// CSS Reset
const ResetCSS = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: block;
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;

  @media screen and (max-width:100%) {
    /* Adjust the image size for smaller screens */
    max-width: 100%;
  }
`;

function HomePage() {
  return (
    <ResetCSS>
      <Banner>
        <BannerImage src={bannerImage} alt="홈페이지 배너" />
      </Banner>
    </ResetCSS>
  );
}

export default HomePage;