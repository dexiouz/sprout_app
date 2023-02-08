import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import Box from '../../../components/Box';
import Logo from '../../../components/Logo';
import { SCREEN_WIDTH, SPACE_XSMALL, SPACE_LARGE } from '../../../consts/LAYOUT';
import TemplateText from '../../../components/TemplateText';
import Button from '../../../components/Button';
import TemplateTextInput from '../../../components/TemplateTextInput';
import FormikErrors from '../../../components/FormikError';
import useAuth from '../../../components/hooks/useAuth';
import { WHITE } from '../../../consts/COLOURS';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  name: Yup.string().required('Name is required'),
});

const Login = () => {
  const { handleLogin } = useAuth();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Formik
          initialValues={{ email: '', name: '' }}
          validationSchema={validationSchema}
          onSubmit={values => handleLogin(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <Logo style={styles.logo} />
              <TemplateText
                mv={SPACE_LARGE}
                bold
                size={30}
                primary
                style={styles.text}>
                Set up profile
              </TemplateText>
              <Box width={SCREEN_WIDTH * 0.9}>
                <TemplateTextInput
                  name="name"
                  blurOnSubmit={false}
                  placeholder="Name"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={touched.name && errors.name ? errors.name : null}
                />
                <FormikErrors
                  touched={touched.emailOrPhone || null}
                  errors={errors.emailOrPhone || null}
                />
              </Box>
              <Box width={SCREEN_WIDTH * 0.9}>
                <TemplateTextInput
                  name="email"
                  blurOnSubmit={false}
                  placeholder="Email"
                  returnKeyType="done"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email ? errors.email : null}
                />
                <FormikErrors
                  touched={touched.name || null}
                  errors={touched.name || null}
                />
              </Box>
              <Button width={'90%'} mt={20} onPress={handleSubmit}>
                <Box row center>
                  <AntDesign name="lock1" color={WHITE} size={18} />
                  <TemplateText color={WHITE} bold ml={SPACE_XSMALL}>
                    LOGIN
                  </TemplateText>
                </Box>
              </Button>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  logo: {
    width: 90,
    height: 90,
  },
});
