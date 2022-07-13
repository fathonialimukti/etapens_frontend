import { styled } from '@nextui-org/react';

export const StyledNavMainContainer = styled('nav', {
  top: 0,
  height: '76px',
  position: 'sticky',
  background: 'transparent',
  zIndex: '$max'
});

export const StyledNavContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  size: '100%',
  variants: {
    detached: {
      true: {
        backdropFilter: 'saturate(180%) blur(10px)',
        boxShadow: '0px 5px 20px -5px rgba(2, 1, 1, 0.1)'
      },
    }
  }
});
