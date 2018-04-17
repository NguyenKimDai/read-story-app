import React from 'react';
import HomePage from './components/HomePage';
import Library from './components/Library';
import User from './components/User';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const Tabs = TabNavigator(
    {
        HomeScreen: {
            screen: HomePage,
        },
        LibraryScreen: {
            screen: Library,
        },
        UserScreen: {
            screen: User,
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button transparent vertical
                                onPress = {() => props.navigation.navigate('HomeScreen')}>
                            <Icon name = 'ios-planet-outline' style = {{color: '#fff'}}/>
                            <Text style = {{color: '#fff'}}>Home</Text>
                        </Button>
                        <Button transparent vertical
                                onPress = {() => props.navigation.navigate('LibraryScreen')}>
                            <Icon name = 'ios-book-outline' style = {{color: '#fff'}}/>
                            <Text style = {{color: '#fff'}}>Library</Text>
                        </Button>
                        <Button transparent vertical
                                onPress = {() => props.navigation.navigate('UserScreen')}>
                            <Icon name = 'ios-person-outline' style = {{color: '#fff'}}/>
                            <Text style = {{color: '#fff'}}>User</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        },
    }
);

export default StackNavigator({
    MainStack: {
        screen: Tabs
    }
});