import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

export default class Telephone_form extends Component {
  render() {
    let data = [
      {
        value: 'val',
      },
      {
        value: 'val',
      },
      {
        value: 'val',
      },
    ];
    return <Dropdown label="Favorite Fruit" data={data} />;
  }
}

const styles = StyleSheet.create({});
