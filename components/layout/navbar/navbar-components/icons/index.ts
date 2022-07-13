import { styled, CSS } from '@nextui-org/react';

export interface IconProps {
  fill?: string;
  filled?: boolean;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  label?: string;
  onPress?: () => void;
  className?: string;
  css?: CSS;
}

export const Icon = styled('svg', {});

export { default as Moon } from './moon';
export { default as Sun } from './sun';
export { default as UserIcon } from './user';