import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TemplateText from '../../../components/TemplateText';
import Box from '../../../components/Box';
import {PRIMARY, WHITE, BLACK_OPACITY90} from '../../../consts/COLOURS';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SPACE_MEDIUM, SPACE_SMALL} from '../../../consts/LAYOUT';
import {NavigationProps} from '../../../utils/types';
import RoundBox from '../../../components/RoundBox';
import useAuth from '../../../components/hooks/useAuth';

const Home: FC<NavigationProps> = ({navigation}) => {
  const {handleLogout} = useAuth();
  const [user, setUser] = useState({});

  const handleGetProfile = async () => {
    const profile = await AsyncStorage.getItem('profile');
    const parsedProfile = JSON.parse(profile);
    setUser(parsedProfile);
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box row vCenter pAll={SPACE_MEDIUM}>
        <RoundBox>
          <TouchableOpacity onPress={handleLogout}>
            <AntDesign name="left" color={WHITE} size={18} />
          </TouchableOpacity>
        </RoundBox>

        <Box ml={SPACE_SMALL * 0.4}>
          <TemplateText bold size={20}>
            Your profile
          </TemplateText>
        </Box>
      </Box>
      <Box row vCenter pAll={SPACE_MEDIUM}>
        <RoundBox>
          <TemplateText color={WHITE} bold size={18}>
            {user.name?.slice(0, 1).toUpperCase()}
          </TemplateText>
        </RoundBox>
        <Box ml={SPACE_SMALL * 0.4}>
          <TemplateText bold size={20}>
            {user.name}
          </TemplateText>
          <TemplateText color={BLACK_OPACITY90}>{user.email}</TemplateText>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
