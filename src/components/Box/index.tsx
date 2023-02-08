/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  ColorValue,
  Animated,
} from 'react-native';
import {IS_ANDROID, SPACE_LARGE} from '../../consts/LAYOUT';
import {wp} from '../../utils/getResponsiveSize';

export interface BoxProps extends Animated.AnimatedProps<object, any> {
  animated?: boolean;
  shadow?: boolean;
  lightShadow?: boolean;
  darkShadow?: boolean;
  children?: React.ReactNode;
  center?: boolean;
  vCenter?: boolean;
  hCenter?: boolean;
  selfCenter?: boolean;
  spaceBetween?: boolean;
  spaceEven?: boolean;
  flex?: boolean | number;
  flexGrow?: boolean | number;
  flexWrap?: string;
  row?: boolean;
  column?: boolean;
  mAll?: number | null;
  mt?: number | false;
  mb?: number | false;
  mh?: number | false;
  mv?: number | false;
  ml?: number | false;
  mr?: number | false;
  pAll?: number | false;
  pv?: number | false;
  ph?: number | false;
  pl?: number | false;
  pt?: number | false;
  pr?: number | false;
  pb?: number | false;
  width?:
    | number
    | Animated.Value<number>
    | Animated.Node<number>
    | string
    | false;
  minWidth?:
    | number
    | Animated.Value<number>
    | Animated.Node<number>
    | string
    | false;
  height?:
    | number
    | Animated.Value<number>
    | Animated.Node<number>
    | string
    | false;
  minHeight?:
    | number
    | Animated.Value<number>
    | Animated.Node<number>
    | string
    | false;
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number | false;
  borderTopRightRadius?: number | false;
  justifyContent?: string | false;
  alignItems?: string | false;
  flexEnd?: string | boolean | false;
  backgroundColor?:
    | string
    | ColorValue
    | Animated.Node<string | number>
    | false;
  aspectRatio?: number;
  borderWidth?: number | false;
  borderColor?: string | Animated.Node<string | number> | false;
  absolute?: boolean;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  opacity?: number | Animated.Value<number> | Animated.Node<number>;
  zIndex?: number;
  style?:
    | ViewStyle
    | (ViewStyle | null | undefined)[]
    | Animated.AnimateStyle<ViewStyle>
    | null;
  onPress?: (() => void) | null;
  activeOpacity?: number;
  hGradient?: boolean;
  vGradient?: boolean;
  gradientColors?: string[];
  gradientStartBalance?: number;
  gradientEndBalance?: number;
  disabled?: boolean;
  overflow?: string;
  position?: string;
  fadeIn?: boolean;
  fadeInTime?: number;
  fadeInDelay?: number;
  slideIn?: boolean;
  slideInTime?: number;
  slideInDelay?: number;
}

const Box: React.FC<BoxProps> = ({
  animated,
  shadow,
  lightShadow,
  darkShadow,
  children,
  center,
  vCenter,
  hCenter,
  selfCenter,
  spaceBetween,
  spaceEven,
  flex,
  flexGrow,
  flexWrap,
  row,
  column,
  flexEnd,
  mAll,
  mt,
  mb,
  mh,
  mv,
  ml,
  mr,
  pAll,
  pv,
  ph,
  pl,
  pt,
  pr,
  pb,
  width,
  minWidth,
  minHeight,
  height,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  justifyContent,
  alignItems,
  backgroundColor,
  aspectRatio,
  borderWidth,
  borderColor,
  absolute,
  top,
  bottom,
  left,
  right,
  opacity,
  zIndex,
  style,
  onPress,
  activeOpacity,
  hGradient,
  vGradient,
  gradientColors,
  gradientStartBalance,
  gradientEndBalance,
  disabled,
  overflow,
  fadeIn,
  fadeInTime,
  fadeInDelay,
  slideIn,
  slideInTime,
  slideInDelay,
  ...restProps
}) => {
  const Component = onPress
    ? animated || fadeIn
      ? Animated.createAnimatedComponent(TouchableOpacity)
      : TouchableOpacity
    : ((animated || fadeIn ? Animated.View : View) as React.ElementType);

  const fadeOpacity = useRef(new Animated.Value(0)).current;
  const slideValue = useRef(
    new Animated.ValueXY({x: slideIn ? wp(SPACE_LARGE) : 0, y: 0}),
  ).current;

  useEffect(() => {
    if (fadeIn) {
      setTimeout(() => {
        Animated.timing(fadeOpacity, {
          toValue: opacity || opacity === 0 ? opacity : 1,
          duration: ((fadeInTime || fadeInTime === 0) && fadeInTime) || 750,
          useNativeDriver: true,
        }).start();
      }, fadeInDelay || 0);
    }
  }, [opacity]);

  useEffect(() => {
    if (slideIn) {
      setTimeout(() => {
        Animated.timing(slideValue, {
          toValue: {x: 0, y: 0},
          duration: ((slideInTime || slideInTime === 0) && slideInTime) || 500,
          useNativeDriver: true,
        }).start();
      }, slideInDelay || 0);
    }
  }, []);

  return (
    <Component
      style={[
        !!flex && {flex: flex === true ? 1 : flex},
        !!flexGrow && {flexGrow: flexGrow === true ? 1 : flexGrow},
        !!flexWrap && {flexWrap},
        center && styles.center,
        hCenter && styles.hCenter,
        vCenter && styles.vCenter,
        selfCenter && styles.selfCenter,
        spaceBetween && styles.spaceBetween,
        spaceEven && styles.spaceEven,
        row && styles.row,
        column && styles.column,
        flexEnd && {flexEnd},
        !!mAll && {margin: mAll},
        !!mt && {marginTop: mt},
        !!mb && {marginBottom: mb},
        !!ml && {marginLeft: ml},
        !!mr && {marginRight: mr},
        !!slideIn && {
          transform: [{translateX: slideValue.x}, {translateY: slideValue.y}],
        },
        !!mh && {marginHorizontal: mh},
        !!mv && {marginVertical: mv},
        !!width && {width},
        !!minWidth && {minWidth},
        !!minHeight && {minHeight},
        !!height && {height},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        !!justifyContent && {justifyContent},
        !!alignItems && {alignItems},
        !!backgroundColor && {backgroundColor},
        !!aspectRatio && {aspectRatio},
        !!overflow && {overflow},
        !!borderWidth && {borderWidth},
        !!borderColor && {borderColor},
        !!borderRadius && {borderRadius},
        !!borderBottomLeftRadius && {borderBottomLeftRadius},
        !!borderBottomRightRadius && {borderBottomRightRadius},
        !!borderTopLeftRadius && {borderTopLeftRadius},
        !!borderTopRightRadius && {borderTopRightRadius},
        !fadeIn && (!!opacity || opacity === 0) && {opacity},
        !!fadeIn && {opacity: fadeOpacity},
        (!!zIndex || zIndex === 0) && {zIndex},
        !!absolute && {position: 'absolute'},
        (!!top || top === 0) && {top},
        (!!bottom || bottom === 0) && {bottom},
        (!!left || left === 0) && {left},
        (!!right || right === 0) && {right},
        !!disabled && {opacity: 0.5},
        IS_ANDROID && (shadow || lightShadow) && style,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity || 1}
      disabled={disabled}
      {...restProps}>
      {!IS_ANDROID && shadow && (
        <View
          style={[
            styles.overlay,
            !!borderRadius && {borderRadius},
            !!borderBottomLeftRadius && {borderBottomLeftRadius},
            !!borderBottomRightRadius && {borderBottomRightRadius},
            !!borderTopLeftRadius && {borderTopLeftRadius},
            !!borderTopRightRadius && {borderTopRightRadius},
          ]}
        />
      )}
      {!IS_ANDROID && shadow && (
        <View
          style={[
            styles.overlay,
            !!borderRadius && {borderRadius},
            !!borderBottomLeftRadius && {borderBottomLeftRadius},
            !!borderBottomRightRadius && {borderBottomRightRadius},
            !!borderTopLeftRadius && {borderTopLeftRadius},
            !!borderTopRightRadius && {borderTopRightRadius},
          ]}
        />
      )}
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  center: {justifyContent: 'center', alignItems: 'center'},
  hCenter: {justifyContent: 'center'},
  vCenter: {alignItems: 'center'},
  selfCenter: {alignSelf: 'center'},
  spaceBetween: {justifyContent: 'space-between'},
  spaceEven: {justifyContent: 'space-evenly'},
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
});

export default Box;
