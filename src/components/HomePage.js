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
import { FlatList, TouchableOpacity } from 'react-native';

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
                { id: 1, value: 'JS' },
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
            <Button style = {{width: 100, height: 100, marginRight: 10, backgroundColor: 'lightblue'}}>
                <Text>{item.value}</Text>
            </Button>
        );
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
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
                    <Card>
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
                </Content>
            </Container>
        );
    }
}