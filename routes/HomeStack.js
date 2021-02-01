import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Main from "../screens/Main";



const screens = {
    Login: {
        screen: Login
    },
    Main: {
        screen: Main
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)