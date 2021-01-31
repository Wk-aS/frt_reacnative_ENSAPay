import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Button, Block } from '../components';
import axios from "axios";
import deviceStorage from "../services/deviceStorage";

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Phone: '',
      password: '',
      error: '',
      loading: false
    };

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    const { Phone, password } = this.state;

    this.setState({ error: '', loading: true });

    // NOTE Post to HTTPS only in production
    axios.post("http://localhost:8081/login",{
      userName: Phone,
      password: password
    })
    .then((response) => {
      deviceStorage.saveKey("id_token", response.data.jwt);
      this.props.newJWT(response.data.jwt);
      this.props.navigation.navigate('Main');
      this.state.loginSuccess=true;
    })
    .catch((error) => {
      console.log(error);
    });
  }


  state = {
    Phone: '',
    password: '',
    isLoadingComplete: false,
    loginSuccess:false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ENSAPay</Text>
        <View style={styles.inputView}>
          <TextInput
            keyboardType={'numeric'}
            style={styles.inputText}
            value={this.state.Phone}
            placeholder="Phone..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ Phone: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            value={this.state.password}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.loginUser()
          }}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignupBtn}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
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
    width: '80%',
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
