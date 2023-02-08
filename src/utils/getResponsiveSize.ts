import { PixelRatio, Dimensions } from 'react-native';

interface ResponsiveType {
  (size: number): number;
}

// Dimmensions corresponding to iPhone 13, used in the designs
export const DESIGN_HEIGHT = 844;
export const DESIGN_WIDTH = 390;

const SCREEN_HEIGHT: number = Dimensions.get('screen').height;
const SCREEN_WIDTH: number = Dimensions.get('screen').width;

export const hp: ResponsiveType = (value: number) => {
  const dimension = (value / DESIGN_HEIGHT) * 100;
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * dimension) / 100);
};

export const wp: ResponsiveType = (value: number) => {
  const dimension = (value / DESIGN_WIDTH) * 100;
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * dimension) / 100);
};
