/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TextStyle, TextProps} from 'react-native';
import {startCase as startCaseFunc} from 'lodash';
import {
  PRIMARY,
  WHITE,
  WHITE_OPACITY60,
  WHITE_OPACITY80,
} from '../../consts/COLOURS';
import {IS_SHORT_DEVICE} from '../../consts/LAYOUT';
import {hp} from '../../utils/getResponsiveSize';

export interface Props extends TextProps {
  mAll?: number;
  mt?: number;
  mb?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  pAll?: number;
  pv?: number;
  ph?: number;
  pl?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  light?: boolean;
  medium?: boolean;
  bold?: boolean;
  title?: boolean;
  caps?: boolean;
  subTitle?: boolean;
  small?: boolean;
  green?: boolean;
  semiBold?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  color?: string | null;
  size?: number | null;
  lineThrough?: boolean;
  numberOfLines?: number;
  startCase?: boolean;
  upperCase?: boolean;
  capitalize?: boolean;
  underline?: boolean;
  primary?: boolean;
  allowFontScaling?: boolean;
  adjustsFontSizeToFit?: boolean;
  style?: TextStyle | TextStyle[] | null;
  children?: string | React.ReactChild | null;
  white?: boolean | string;
  italic?: boolean;
}

const TemplateText: React.FC<Props> = ({
  mAll = 0,
  mt = 0,
  mb = 0,
  mh = 0,
  mv = 0,
  ml = 0,
  mr = 0,
  pAll = 0,
  pv = 0,
  ph = 0,
  pl = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  white,
  light = false,
  medium = false,
  bold = false,
  title = false,
  caps = false,
  subTitle = false,
  small = false,
  green = false,
  primary = false,
  semiBold = false,
  center = false,
  left = false,
  right = false,
  color = null,
  size = null,
  lineThrough = false,
  numberOfLines = 0,
  startCase = false,
  upperCase = false,
  capitalize = false,
  underline = false,
  allowFontScaling = true,
  italic = false,
  style,
  adjustsFontSizeToFit = false,
  children = null,
  ...restProps
}) => {
  const textStyle: TextStyle = {};

  let content = children;

  if (startCase && typeof children === 'string') {
    content = startCaseFunc(children);
  }

  return (
    <Text
      {...restProps}
      style={[
        styles.default,
        style && style,
        textStyle,
        !!white && {color: 'white'},
        !!mAll && {margin: mAll},
        !!mt && {marginTop: mt},
        !!mb && {marginBottom: mb},
        !!ml && {marginLeft: ml},
        !!mr && {marginRight: mr},
        !!mh && {marginHorizontal: mh},
        !!mv && {marginVertical: mv},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        !!size && {fontSize: size},
        !!center && {textAlign: 'center'},
        !!left && {textAlign: 'left'},
        !!right && {textAlign: 'right'},
        !!capitalize && {textTransform: 'capitalize'},
        (caps || upperCase) && {textTransform: 'uppercase'},
        !!underline && {textDecorationLine: 'underline'},
        !!lineThrough && {
          textDecorationLine: 'line-through',
          textDecorationStyle: 'solid',
        },
        !!primary && {color: PRIMARY},
        !!color && {color},
        !!title && {fontSize: hp(24), fontWeight: 'bold'},
        !!subTitle && {fontSize: hp(20)},
        !!small && {fontSize: hp(14)},
        !!bold && {fontWeight: 'bold'},
        !!semiBold && {fontWeight: '400'},
        !!italic && {fontStyle: 'italic'},
      ]}
      numberOfLines={numberOfLines}
      allowFontScaling={numberOfLines === 1 ? true : allowFontScaling}
      adjustsFontSizeToFit={numberOfLines === 1 ? true : adjustsFontSizeToFit}>
      {content}
    </Text>
  );
};

TemplateText.defaultProps = {
  mAll: 0,
  mt: 0,
  mb: 0,
  mh: 0,
  mv: 0,
  ml: 0,
  mr: 0,
  pAll: 0,
  pv: 0,
  ph: 0,
  pl: 0,
  pt: 0,
  pr: 0,
  pb: 0,
  light: false,
  medium: false,
  bold: false,
  title: false,
  caps: false,
  subTitle: false,
  small: false,
  green: false,
  semiBold: false,
  center: false,
  left: false,
  right: false,
  color: null,
  size: null,
  lineThrough: false,
  numberOfLines: 0,
  startCase: false,
  upperCase: false,
  capitalize: false,
  underline: false,
  allowFontScaling: true,
  style: null,
  adjustsFontSizeToFit: false,
  children: null,
};

const styles = StyleSheet.create({
  default: {
    // fontSize: IS_SHORT_DEVICE ? hp(14) : hp(16),
    color: '#000',
  },
});

export default TemplateText;
