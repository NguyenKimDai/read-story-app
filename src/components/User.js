import React, { Component } from 'react';
import {Container,
        View,
        Text,
        Thumbnail,
        Item,
        Icon,
        Button
} from 'native-base';
import { ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

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
                        <ImageBackground    source = {require('../images/anime.jpeg')}
                                            style = {{height: 200, alignSelf: 'stretch'}}>
                        </ImageBackground>

                        <View style = {{alignItems: 'center', marginTop: -20}}>
                            <Thumbnail large source = {require('../images/avatar.png')}/>
                        </View>

                        <TouchableOpacity style = {{alignItems: 'center', marginTop: 15}}>
                            <Text style = {{padding: 10, borderWidth: 2, borderColor: '#19c49c', borderRadius: 50}}>Đăng nhập</Text>
                        </TouchableOpacity>

                        <View style = {{marginTop: 20, marginHorizontal: 15}}>
                            <TouchableOpacity>
                            <Item style = {{paddingVertical: 10}}>
                                <Icon name = 'ios-create-outline'/>
                                <Text>Trở thành tác giả</Text>
                            </Item>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Item style = {{paddingVertical: 10}}>
                                <Icon name = 'ios-chatbubbles-outline'/>
                                <Text>Phản hồi</Text>
                            </Item>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Item style = {{paddingVertical: 10}}>
                                <Icon name = 'ios-settings-outline'/>
                                <Text>Thiết lập</Text>
                            </Item>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}