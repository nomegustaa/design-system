import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@ui-kit-design-sistem/ui-components';

export default {
  title: 'Data display/ Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/nomegustaa.png',
    alt: 'Gustavo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
