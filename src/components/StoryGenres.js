import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, View, Text, Button, Icon, Title } from 'native-base';

export default class StoryGenres extends Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <View>
                <View style = {{height: 23}}/>
                <Header>
                    <Left>
                        <Button transparent
                                onPress = {() => {}}>
                            <Icon name = 'arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Genres</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>OK</Text>
                        </Button>
                    </Right>
                </Header>
            </View>
        )
    });

    render() {
        return (
            <Container>
                
            </Container>
        );
    }
}