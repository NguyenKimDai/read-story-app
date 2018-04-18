import React, { Component } from 'react';
import {Container,
        Content,
        Text,
        View,
        Header,
        Item,
        Icon,
        Input,
        Segment,
        Button,
        Tabs,
        Tab,
        TabHeading
} from 'native-base';
import Reading from './Reading';
import Completed from './Completed';
import Downloaded from './Downloaded';

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
            seg: 1,
        };
    }

    render() {
        return (
            <Container>
                {/* <Tabs>
                    <Tab heading = {<TabHeading><Text>Reading</Text></TabHeading>}>
                        <Reading/>
                    </Tab>
                    <Tab heading = {<TabHeading><Text>Completed</Text></TabHeading>}>
                        <Completed/>
                    </Tab>
                    <Tab heading = {<TabHeading><Text>Downloaded</Text></TabHeading>}>
                        <Downloaded/>
                    </Tab>
                </Tabs> */}
                <Segment>
                    <Button first
                            active={this.state.seg === 1 ? true : false}
                            onPress = {() => this.setState({seg: 1})}>
                        <Icon name = 'ios-book-outline'/>
                    </Button>
                    <Button active={this.state.seg === 2 ? true : false}
                            onPress = {() => this.setState({seg: 2})}>
                        <Icon name = 'ios-checkmark-circle-outline'/>
                    </Button>
                    <Button last
                            active={this.state.seg === 3 ? true : false}
                            onPress = {() => this.setState({seg: 3})}>
                        <Icon name = 'ios-download-outline'/>
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