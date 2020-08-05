import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import SnsIconsComponent from '../components/organisms/snsIcons'

export default {
  title: 'Organisms',
  component: Button,
};

export const iconSetsOrganisms = () => <SnsIconsComponent></SnsIconsComponent>;
