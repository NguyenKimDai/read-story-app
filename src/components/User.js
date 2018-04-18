import React, { Component } from 'react';
import {Container,
        View,
        Text,
        Thumbnail,
        Item,
        Icon,
        Button
} from 'native-base';
import { ImageBackground, ScrollView, TouchableHighlight, Alert } from 'react-native';

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
                    <ScrollView>
                        <ImageBackground    source = {require('../images/bg.jpg')}
                                            style = {{height: 200, alignSelf: 'stretch'}}>
                        </ImageBackground>

                        <View style = {{alignItems: 'center', marginTop: -25}}>
                            <Thumbnail large source = {require('../images/avatar.jpg')}/>
                        </View>

                        <View style = {{alignItems: 'center', marginTop: 15}}>
                            <TouchableHighlight style = {{borderRadius: 50}}
                                                underlayColor = '#19c49c'
                                                onPress = {() => {}}>
                                <Text style = {{padding: 10, borderWidth: 1, borderColor: '#19c49c', borderRadius: 50}}>Đăng nhập</Text>
                            </TouchableHighlight>
                        </View>

                        <View style = {{marginTop: 20, marginHorizontal: 15}}>
                        <Button full transparent
                                    style = {{justifyContent: 'flex-start'}}>
                                <Item style = {{paddingVertical: 20, alignItems: 'center'}}>
                                    <Icon name = 'ios-create-outline'/>
                                    <Text>Become an author</Text>
                                </Item>
                            </Button>
                            <Button full transparent
                                    style = {{justifyContent: 'flex-start'}}>
                                <Item style = {{paddingVertical: 20, alignItems: 'center'}}>
                                    <Icon name = 'ios-chatbubbles-outline'/>
                                    <Text>Feedback</Text>
                                </Item>
                            </Button>
                            <Button full transparent
                                    style = {{justifyContent: 'flex-start'}}>
                                <Item style = {{paddingVertical: 20, alignItems: 'center'}}>
                                    <Icon name = 'ios-settings-outline'/>
                                    <Text>Settings</Text>
                                </Item>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}