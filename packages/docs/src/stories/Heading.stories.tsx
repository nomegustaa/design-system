import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@ignite-ui-ds/ui-components';

export default {
  title: 'Tipography/ Heading',
  component: Heading,
  args: {
    children: 'Esse é um text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
  },
};
