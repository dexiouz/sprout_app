/* eslint-disable */
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { HEADER } from '../../consts/COLOURS';

const Statusbar = ({ barStyle, hidden, backgroundColor }) => {
  return (
    <StatusBar
      barStyle={barStyle || 'light-content'}
      hidden={hidden || false}
    // backgroundColor={backgroundColor || HEADER}
    />
  );
};

export default Statusbar;

const styles = StyleSheet.create({});
