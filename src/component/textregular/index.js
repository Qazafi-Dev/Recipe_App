import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { wp } from '../responsive';

export default function TextRegular({ style, children, numberOfLines }) {
  return (
    <Text
      numberOfLines={numberOfLines || 1}
      style={[styles.txtStyle, style || null]}
    >
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  txtStyle: {
    color: colors.txtDark,
    fontSize: wp(3.6),
    fontFamily: Fonts.SFRegular,
    fontWeight: '500',
  },
});
