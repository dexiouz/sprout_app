import { StyleSheet, Image } from 'react-native';
import React from 'react';
import AppLogo from '../../assets/images/logo.png';

const Logo = ({ style }) => {
  return (
    <Image source={AppLogo} resizeMode="cover" style={[styles.logo, style]} />
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
  },
});
