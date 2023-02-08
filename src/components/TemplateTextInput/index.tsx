import React, {useState, FC, MutableRefObject} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import TemplateText from '../TemplateText';
import {
  BACKGROUND,
  WHITE,
  ERROR_RED,
  PRIMARY,
  BLACK,
  BLACK_OPACITY20,
} from '../../consts/COLOURS';
import {BORDER_MEDIUM} from '../../consts/LAYOUT';
import TemplateIcon from '../TemplateIcon';

type labelIcon = {
  family?: string;
  name?: string;
  size?: number;
  color?: string;
};
interface TemplateTextInputProps extends TextInputProps {
  semiBold?: boolean;
  bold?: boolean;
  focus?: boolean;
  labelText?: string;
  lableColor?: string;
  labelIcon?: labelIcon;
  hasLabel?: boolean;
  inputStyle?: ViewStyle;
  labelTextStyle?: TextStyle;
  children?: ReactChildren | ReactChild | null;
  containerStyle?: ViewStyle | ViewStyle[] | null;
  inputContainerStyle?: ViewStyle | ViewStyle[] | null;
  label?: string | null;
  labelStyle?: TextStyle | TextStyle[] | null;
  restProps?: TextInputProps | null;
  error?: string | null;
  type?: string;
  name?: string;
  refField?: MutableRefObject<any> | null;
  cancel?: boolean;
  onCancelPress?: (() => void) | null;
}
const TemplateTextInput: FC<TemplateTextInputProps> = ({
  containerStyle = {},
  hasLabel = false,
  labelText,
  lableColor = WHITE,
  children,
  inputStyle,
  error,
  name,
  labelIcon,
  labelWrapperStyle,
  labelTextStyle,
  ...restProps
}) => {
  const [thisOneFocus, setThisOneFocus] = useState(false);

  let textInputStyle = styles.textInput;
  if (thisOneFocus) {
    textInputStyle = styles.textInputFocus;
  }
  if (error) {
    textInputStyle = styles.textInputError;
  }

  return (
    <View style={[containerStyle]}>
      <View style={styles.labelChilderenWrapper}>
        <View style={[styles.labelWrapper, labelWrapperStyle]}>
          {labelIcon && (
            <View style={{paddingRight: 10}}>
              <TemplateIcon
                iconFamily={labelIcon.family}
                name={labelIcon.name}
                size={labelIcon.size}
                color={lableColor}
              />
            </View>
          )}
          {hasLabel && (
            <TemplateText
              color={lableColor}
              style={[styles.labelText, labelTextStyle]}>
              {labelText}
            </TemplateText>
          )}
        </View>
        <View>{children}</View>
      </View>

      <TextInput
        placeholderTextColor={BLACK_OPACITY20}
        name={name}
        style={[
          styles.textInput,
          {...textInputStyle, ...inputStyle},
          restProps.style && restProps.style,
        ]}
        {...restProps}
        onFocus={() => setThisOneFocus(true)}
        onBlur={() => setThisOneFocus(false)}
      />

      {error && (
        <TemplateText center color={ERROR_RED} style={styles.validationMessage}>
          {error}
        </TemplateText>
      )}
    </View>
  );
};

export default TemplateTextInput;
const styles = StyleSheet.create({
  textInput: {
    color: WHITE,
    marginBottom: 10,
  },
  labelText: {
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
  },
  textInput: {
    backgroundColor: WHITE,
    borderRadius: BORDER_MEDIUM,
    color: BLACK,
    fontSize: 16,
    height: 45,
    paddingLeft: 7,
    borderWidth: 0.5,
    borderColor: PRIMARY,
  },
  textInputFocus: {
    borderRadius: BORDER_MEDIUM,
    borderWidth: StyleSheet.hairlineWidth,
    color: BLACK,
    fontSize: 16,
    height: 45,
    paddingLeft: 7,
    borderColor: PRIMARY,
  },
  textInputError: {
    backgroundColor: BACKGROUND,
    borderColor: ERROR_RED,
    borderWidth: 1,
    borderRadius: 3,
    height: 45,
    paddingLeft: 7,
    color: BLACK,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 2,
    marginBottom: 7,
  },
  labelChilderenWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  validationMessage: {
    color: BLACK_OPACITY20,
    right: 0,
  },
});
