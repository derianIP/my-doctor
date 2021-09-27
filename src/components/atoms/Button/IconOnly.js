import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICBackDark, ICBackLight} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <ICBackDark />;
    }
    if (icon === 'back-light') {
      return <ICBackLight />;
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
