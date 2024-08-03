import { Meta, StoryObj } from '@storybook/react';
import { Box, Text } from '@ui-kit-design-sistem/ui-components';

export default {
  title: 'Form/ Box',
  component: Box,
  args: {
    children: <Text>Teste</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

export const Primary: StoryObj = {};
