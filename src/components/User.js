import React, { Component } from 'react';
import {Container,
        View,
        Text,
        Thumbnail
} from 'native-base';
import { ImageBackground } from 'react-native';

export default class User extends Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <View style = {{height: 23}}/>
        )
    });

    render() {
        return (
            <Container>
                <View style = {{flex: 1}}>
                    <ImageBackground    source = {require('../images/anime.jpeg')}
                                        style = {{height: 200, alignSelf: 'stretch'}}>
                    </ImageBackground>

                    <View style = {{alignItems: 'center', marginTop: -40}}>
                        <Thumbnail source = {require('../images/avatar.png')}/>
                    </View>
                </View>
            </Container>
        );
    }
}