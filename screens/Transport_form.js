import React, { Component, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { Button } from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Block, Text, Card, Badge } from '../components';
import { theme, mocks } from '../constants';
import { ThemeProvider } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default class Transport_form extends Component {
  state = {
    text: '',
    date: new Date(),
    mode: 'date',
    show: false,
  };

  render() {
    const onChange = (event, selectedDate) => {
      console.log('test');
      const currentDate = selectedDate || this.state.date;
      this.setState({ show: Platform.OS === 'ios' });
      this.setState({ date: currentDate });
    };

    const showMode = (currentMode) => {
      this.setState({ show: true });
      this.setState({ mode: currentMode });
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };

    let data = [
      {
        value: 'value1',
      },
      {
        value: 'value2',
      },
      {
        value: 'value3',
      },
    ];
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Transport
          </Text>

          <TouchableOpacity
            key="Transport_form"
            onPress={() => {
              this.props.navigation.navigate('Transport_form');
            }}
          >
            <Ionicons name="ios-settings-sharp" size={26} color="black" />
          </TouchableOpacity>
        </Block>
        <Block
          flex={false}
          row
          center
          space="between"
          style={{
            paddingHorizontal: theme.sizes.base * 2,
            paddingTop: theme.sizes.base / 2,
          }}
        >
          <Text h2 bold style={{ color: '#ACACAC' }}>
            Transport
          </Text>
        </Block>
        <Block style={{ paddingHorizontal: 30 }}>
          <Dropdown
            selectedItemColor={theme.colors.secondary}
            label="Gare de départ"
            data={data}
          />
          <Dropdown
            selectedItemColor={theme.colors.secondary}
            label="Gare d'arrivé"
            data={data}
          />

          <View style={{ paddingVertical: 15 }}>
            <TextInput
              value={this.state.date.toISOString().substring(0, 10)}
              editable={false}
              showSoftInputOnFocus={false}
              right={
                <TextInput.Icon
                  name={() => (
                    <FontAwesome
                      name="calendar"
                      size={24}
                      color={theme.colors.secondary}
                    />
                  )}
                  onPress={() => {
                    showDatepicker();
                  }}
                />
              }
            ></TextInput>
          </View>
          {this.state.show && (
            <RNDateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <Button
            icon="check"
            style={{ height: 40 }}
            color={theme.colors.primary}
            mode="contained"
            onPress={() => console.log(this.state.date)}
          >
            Valider les choix
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingTop: theme.sizes.base * 2.5,
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
    minHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2.5,
  },
});
