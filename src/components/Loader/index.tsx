import React, {FC} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import Box, {BoxProps} from '../Box';

interface Props extends BoxProps {
  otherColor?: string;
  size?: 'small' | 'large' | undefined;
}

const Loader: FC<Props> = ({otherColor, size, ...restProps}) => (
  <Box style={styles.container} {...restProps}>
    <ActivityIndicator size={size || 'large'} color={otherColor || '#0753AB'} />
  </Box>
);

export default Loader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
