import { ComponentProps } from 'react';
import { styled } from '../../styles';

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sml: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export interface HeadingProps extends ComponentProps<typeof Heading> {}
