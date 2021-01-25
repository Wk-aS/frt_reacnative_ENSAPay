import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Button, Block } from '../components';

export default function Main(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    /* <SafeAreaView style={styles.container}>
      <Block padding={[0, 25 * 1.2]}>
        <Text>haha</Text>
      </Block>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
              <Text style={{ color: 'white' }}>
                {item.title}, {item.releaseYear}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView> */
  };
}

const styles = StyleSheet.create({
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
});
