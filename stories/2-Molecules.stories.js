import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { FaTwitter,FaFacebook, FaLine, FaInstagram  } from "react-icons/fa";

import SnsIconSetMoleculesComponent from '../components/molecules/snsSet'
import Ca from '../components/molecules/carousel'

export default {
  title: 'Molecules',
  component: Button,
};

const data = {
  name:'FaceBook',
  icon:FaTwitter,
}

export const iconSetMolecules = () => <SnsIconSetMoleculesComponent sns={data}></SnsIconSetMoleculesComponent>;
export const carouselMolecules = () => <Ca ></Ca>;
