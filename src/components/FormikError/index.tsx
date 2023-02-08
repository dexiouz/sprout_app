import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import TemplateText from '../TemplateText';
import {ERROR_RED, WHITE} from '../../consts/COLOURS';
import {SCREEN_WIDTH} from '../../consts/LAYOUT';

interface Props {
  touched: boolean | null;
  errors: string | null;
}
const FormikErrors: FC<Props> = ({errors, touched}) => {
  console.log({errors});
  return (
    <>
      {touched && errors ? (
        <TemplateText
          size={13}
          mb={5}
          center
          color={ERROR_RED}
          style={styles.validationMessage}>
          {errors}
        </TemplateText>
      ) : null}
    </>
  );
};

export default FormikErrors;
const styles = StyleSheet.create({
  validationMessage: {
    color: WHITE,
    textAlign: 'center',
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    fontSize: 14,
  },
});
