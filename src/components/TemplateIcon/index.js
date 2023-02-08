import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import TemplateText from '../TemplateText';
import {WHITE} from '../../consts/COLOURS';

// eslint-disable-next-line consistent-return
const renderIcon = (
  iconFamily,
  name,
  size,
  color,
  label,
  onPress,
  containerStyle,
) => {
  if (iconFamily === 'Entypo') {
    return (
      <View style={[styles.iconBox, containerStyle]}>
        <Entypo name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'FontAwesome') {
    return (
      <View style={[styles.iconBox, containerStyle]}>
        <FontAwesome name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'FontAwesome5') {
    return (
      <View style={[styles.iconBox, containerStyle]}>
        <FontAwesome5 name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'AntDesign') {
    return (
      <View style={styles.iconBox}>
        <AntDesign name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'MaterialIcons') {
    return (
      <View style={styles.iconBox}>
        <MaterialIcons name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'SimpleLineIcons') {
    return (
      <View style={styles.iconBox}>
        <SimpleLineIcons name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'MaterialCommunityIcons') {
    return (
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'FontAwesome5Pro') {
    return (
      <View style={styles.iconBox}>
        <FontAwesome5Pro name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'Feather') {
    return (
      <View style={styles.iconBox}>
        <Feather name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </View>
    );
  }
  if (iconFamily === 'Fontisto') {
    return (
      <>
        <Fontisto name={name} size={size} color={color} />
        {label ? (
          <TemplateText style={styles.label}>{label}</TemplateText>
        ) : null}
      </>
    );
  }
};

const TemplateIcon = ({
  iconFamily,
  name,
  size,
  color,
  label,
  onPress,
  containerStyle = {},
  padding,
  style,
}) => (
  <View style={{paddingHorizontal: padding ? 5 : 0, ...style}}>
    {renderIcon(iconFamily, name, size, color, label, onPress, containerStyle)}
  </View>
);

export default TemplateIcon;

const styles = StyleSheet.create({
  label: {
    color: WHITE,
    fontSize: 10,
  },
  container: {
    position: 'absolute',
    zIndex: 1,
  },
});
