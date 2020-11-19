import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
       Directory: { screen: Directory },
       CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        intitialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
    
    render() {
        return (
            <View
                style= {{
                    flex: 1,
                    paddingtop: Platform.OS === 'ios ? 0 : Expo.Constants.statusBarHieght'}}>
               <AppNavigator />
            </View>
        );
    }
}

export default Main;