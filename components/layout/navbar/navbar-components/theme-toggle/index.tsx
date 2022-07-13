import React from 'react';
import { Moon, Sun } from '../icons';
import { styled, useTheme, Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Blockholder from '../blockholder';
import useIsMounted from 'hooks/use-is-mounted';

const StyledButton = styled('button', {
  dflex: 'center',
  size: 'auto',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  '& .theme-selector-icon': {
    color: '$colors$accents6'
  },
  '@xsMax': {
    px: '$2'
  }
});

export const ThemeToggle = () => {
  const isMounted = useIsMounted();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  if (!isMounted) {
    return (
      <Blockholder alt="toggle theme placeholder" width="32px" height="20px" />
    );
  }

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <>
      <Switch
        checked={!isDark}
        size="md"
        shadow
        color='warning'
        iconOn={<Sun filled />}
        iconOff={<Moon filled />}
        onChange={()=>handleToggleTheme()}
      />
    </>
  );
};

export default ThemeToggle;
