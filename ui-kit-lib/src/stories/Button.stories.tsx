import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../UI/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const GreenTxtBtn = Template.bind({});
GreenTxtBtn.args = {
  color: 'green',
  children: 'Button',
};

export const RedTxtBtn = Template.bind({});
RedTxtBtn.args = {
  color: 'red',
  children: 'Button',
};
