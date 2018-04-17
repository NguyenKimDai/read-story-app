import React, { Component } from 'react';
import { Container, Content, Text, View, Header, Item, Icon, Input, Segment, Button } from 'native-base';
import Reading from './Libraries/Reading';
import Completed from './Libraries/Completed';
import Downloaded from './Libraries/Downloaded';

export default class Library extends Component {
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
            seg: 2,
        };
    }

    render() {
        return (
            <Container>
                <Segment>
                    <Button first
                            active={this.state.seg === 1 ? true : false}
                            onPress = {() => this.setState({seg: 1})}>
                        <Text>Đang đọc</Text>
                    </Button>
                    <Button first
                            active={this.state.seg === 2 ? true : false}
                            onPress = {() => this.setState({seg: 2})}>
                        <Text>Đã xong</Text>
                    </Button>
                    <Button first
                            active={this.state.seg === 3 ? true : false}
                            onPress = {() => this.setState({seg: 3})}>
                        <Text>Tải về</Text>
                    </Button>
                </Segment>
                <Content padder>
                    {this.state.seg === 1 && <Reading/>}
                    {this.state.seg === 2 && <Completed/>}
                    {this.state.seg === 3 && <Downloaded/>}
                </Content>
            </Container>
        );
    }
}