import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import SnsIconAtomComponent from '../components/atoms/snsIcon'
import { FaTwitter,FaFacebook, FaLine, FaInstagram  } from "react-icons/fa";

export default {
  title: 'Atom',
  component: Button,
};

export const iconAtom = () => <SnsIconAtomComponent><FaTwitter></FaTwitter></SnsIconAtomComponent>;
