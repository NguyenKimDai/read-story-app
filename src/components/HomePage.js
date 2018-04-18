import React, { Component } from 'react';
import {Container,
        Content,
        Text,
        View,
        Header,
        Item,
        Icon,
        Input,
        Card,
        CardItem,
        Button
} from 'native-base';
import { FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default class HomePage extends Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <View>
                <View style = {{height: 23}}/>
                <Header searchBar rounded hasTabs>
                    <Item>
                        <Icon name = 'ios-search'/>
                        <Input placeholder = 'Search'/>
                    </Item>
                </Header>
            </View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, value: 'React Native' },
                { id: 2, value: 'Android' },
                { id: 3, value: 'iOS' },
                { id: 4, value: 'C++' },
                { id: 5, value: 'C#' },
                { id: 6, value: 'PHP' },
                { id: 7, value: 'Java' },
                { id: 8, value: 'HTML' },
                { id: 9, value: 'Python' },
                { id: 10, value: 'HTML' },
                { id: 11, value: 'CSS' },
                { id: 12, value: 'Ruby' },
                { id: 13, value: 'D' },
                { id: 14, value: 'F' },
                { id: 15, value: 'XML' },
                { id: 16, value: 'JSON' },
                { id: 17, value: 'VB' },
                { id: 18, value: 'Haskell' },
                { id: 19, value: 'BrainFuck' },
                { id: 20, value: 'Pascal' },
            ]
        };
    }

    _renderItem = ({item}) => {
        return (
            <ImageBackground    source = {require('../images/cover.png')}
                                style = {styles.item}>
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {[styles.title, styles.text_shadow]}>{item.value}</Text>
                </View>
                <View style = {{flex: 1}}>
                    <Text style = {[styles.text_shadow, {flex: 1}]}>Author</Text>
                    <Text style = {[styles.text_shadow, {flex: 1}]}>Category</Text>
                    <Button bordered light full
                            style = {[styles.text_shadow, {flex: 1}]}>
                        <Text style = {styles.text_shadow}>READ</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card transparent>
                        <CardItem>
                            <View style = {{flexDirection: 'column', flex: 1}}>
                                <View style = {{flexDirection: 'row', marginBottom: 10}}>
                                    <Text style = {{flex: 1}}>Recommended</Text>
                                    <TouchableOpacity>
                                        <Text>MORE</Text>
                                    </TouchableOpacity>
                                </View>
                                <FlatList   data = {this.state.data}
                                            renderItem = {this._renderItem}
                                            horizontal = {true}
                                            keyExtractor = {item => item.id}>
                                </FlatList>
                            </View>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <CardItem>
                            <View style = {{flexDirection: 'column', flex: 1}}>
                                <View style = {{flexDirection: 'row', marginBottom: 10}}>
                                    <Text style = {{flex: 1}}>Trending</Text>
                                    <TouchableOpacity>
                                        <Text>MORE</Text>
                                    </TouchableOpacity>
                                </View>
                                <FlatList   data = {this.state.data}
                                            renderItem = {this._renderItem}
                                            horizontal = {true}
                                            keyExtractor = {item => item.id}>
                                </FlatList>
                            </View>
                        </CardItem>
                    </Card>

                    <View style = {{alignItems: 'center', paddingHorizontal: 10}}>
                        <Text style = {{fontSize: 20}}>There is nothing attracts you?</Text>
                        <Text>We can recommend the most read stories. You can also find stories according to your favorite genres</Text>
                        <Button full
                                style = {{margin: 15, backgroundColor: '#19c49c'}}
                                onPress = {() => this.props.navigation.navigate('GenresScreen')}>
                            <Text>Your favorite genres?</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: 120,
        height: 200,
        marginRight: 10,
        alignSelf: 'stretch',
        padding: 5,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text_shadow: {
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
});