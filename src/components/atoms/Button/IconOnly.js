import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICBackDark} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      <ICBackDark />;
    }
    if (icon === 'back-light') {
      <ICBackDark />;
    }
    return <ICBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
