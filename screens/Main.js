import React, { Component, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Block, Text, Card, Badge } from '../components';
import { theme, mocks } from '../constants';

const { width } = Dimensions.get('window');
const categoriess = [
  {
    id: 'Téléphone/Internet',
    name: 'Téléphone/Internet',
    icon: 'phone',
    image: require('../assets/icon.png'),
  },
  {
    id: 'Eau/electricité',
    name: 'Eau/electricité',
    icon: 'bolt',
    image: require('../assets/icon.png'),
  },
  {
    id: 'Transport',
    name: 'Transport',
    icon: 'bus',
    image: require('../assets/icon.png'),
  },
];

export default class Main extends Component {
  render() {
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Main
          </Text>
          <Ionicons name="ios-settings-sharp" size={26} color="black" />
        </Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h2 bold style={{ color: '#ACACAC' }}>
            Créanciers
          </Text>
        </Block>
        <Block flex={false} row space="between" style={styles.categories}>
          {categoriess.map((category) => (
            <TouchableOpacity
              key={category.name}
              onPress={() => navigation.navigate('Explore', { category })}
            >
              <Card center middle shadow style={styles.category}>
                <Badge
                  margin={[0, 0, 15]}
                  size={50}
                  color="rgba(41,216,143,0.20)"
                ></Badge>
                <FontAwesome name={category.icon} size={24} color="black" />
                <Text medium height={20}>
                  {category.name}
                </Text>
                <Text gray caption>
                  Text
                </Text>
              </Card>
            </TouchableOpacity>
          ))}
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingTop: theme.sizes.base * 2,
  },
  container: {
    paddingTop: 200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFD100',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderColor: '#09005A',
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000180',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
    color: '#000180',
  },
  loginBtn: {
    width: 300,
    marginLeft: 22,
    marginRight: 22,
    backgroundColor: '#000180',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  SignupBtn: {
    width: '80%',
    backgroundColor: '#FFD100',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signupText: {
    color: '#000180',
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
    paddingTop: theme.sizes.base * 2,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
});
