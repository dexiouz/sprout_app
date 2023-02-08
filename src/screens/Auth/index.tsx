import {StyleSheet, Image, ImageBackground} from 'react-native';
import React, {FC} from 'react';
import Box from '../../components/Box';
import backgroundImage from '../../assets/images/background.png';
import TemplateText from '../../components/TemplateText';
import Statusbar from '../../components/StatusBar';
import Logo from '../../assets/images/logo.png';
import {PRIMARY} from '../../consts/COLOURS';
import Button from '../../components/Button';
import {SPACE_LARGE} from '../../consts/LAYOUT';
import {NavigationProps} from '../../utils/types';
const Auth: FC<NavigationProps> = ({navigation}) => {
  return (
    <Box flex>
      <Statusbar />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <Image source={Logo} resizeMode="cover" style={styles.logo} />
        <TemplateText
          mv={SPACE_LARGE}
          bold
          size={30}
          primary
          style={styles.text}>
          Welcome
        </TemplateText>
        <Button white mt={SPACE_LARGE} width="80%" onPress={() => {}}>
          Submit
        </Button>
        <Button
          onPress={() => navigation.navigate('Login')}
          mt={SPACE_LARGE}
          width="80%">
          Login
        </Button>
      </ImageBackground>
    </Box>
  );
};

export default Auth;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});
