import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui-ds/ui-components';

export default {
  title: 'Tipography/ Text',
  component: Text,
  args: {
    children: 'Esse é um text',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<Text>;

export const Primary: StoryObj<TextProps> = {
  args: {
    as: 'h1',
    size: 'xxs',
  },
};
