import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PRIMARY, WHITE } from '../../consts/COLOURS';
import Box from '../Box';

const RoundBox = ({ children }) => {
  return (
    <Box
      // onPress={onPress}
      width={40}
      height={40}
      backgroundColor={PRIMARY}
      borderRadius={50}
      center>
      {children}
    </Box>
  );
};

export default RoundBox;
