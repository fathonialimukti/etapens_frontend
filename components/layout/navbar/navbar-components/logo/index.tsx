import React from 'react';
import { styled } from '@nextui-org/react';

const StyledSmallLogo = styled('h3', {
  '& path': { fill: '$foreground' },
  display: 'none',
  '@smMax': {
    display: 'block'
  }
});

const StyledLargeLogo = styled('h3', {
  display: 'block',
  '& path': { fill: '$foreground' },
  '@smMax': {
    display: 'none'
  }
});

const Logo = () => {
  const Small = () => (
    <StyledSmallLogo>
      ETA
    </StyledSmallLogo>
  );

  const Large = () => (
    <StyledLargeLogo>
      Etalase Tugas Akhir
    </StyledLargeLogo>
  );

  return (
    <>
      <Small />
      <Large />
    </>
  );
};

export default Logo;
