import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const RecipeCard = () => {
  return (
    <View style={mystyles.list}>
      <Image source={Images.BBQinven} style={{ width: 36, height: 36 }} />
      <View style={{ left: 8, width: '84%' }}>
        <TextRegular style={mystyles.title}>Special pizza</TextRegular>
        <TextRegular style={[mystyles.title, { color: '#8F9BAD' }]}>
          Unit Prize: <TextRegular style={mystyles.title}>$10</TextRegular>
        </TextRegular>
        <TextRegular style={[mystyles.title, { color: '#8F9BAD' }]}>
          Stock: <TextRegular style={mystyles.title}>10</TextRegular>
        </TextRegular>
      </View>
      <View style={mystyles.online} />
    </View>
  );
};

export default RecipeCard;

const mystyles = StyleSheet.create({
  title: {
    fontSize: 13,
    color: '#21132B',
  },
  online: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#31CB47',
  },
  list: {
    width: '95%',
    borderRadius: 6,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    elevation: 1,
    alignSelf: 'center',
    height: 'auto',
    alignItems: 'center',
    marginVertical: 4,
  },
});
