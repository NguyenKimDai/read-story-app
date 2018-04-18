import React, { Component } from 'react';
import { View, Text, Card, CardItem, Body, Icon } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default class ItemStory extends Component {
    render() {
        return (
            <Card transparent>
                <CardItem>
                    <Body style = {{flexDirection: 'row'}}>
                        <Image  style = {{flex: 3, height: 100, alignSelf: 'stretch'}}
                                source = {require('../images/avatar.png')}/>
                        <View style = {{flex: 7, paddingLeft: 10}}>
                            <View style = {{flex: 4}}>
                                <Text style = {{fontWeight: 'bold', fontSize: 20}}>Fairy Tail</Text>
                                <Text note>Hiro Mashima</Text>
                                <Text note>Adventure, Fantasy</Text>
                            </View>
                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                <View style = {styles.review}>
                                    <Icon name = 'ios-eye-outline' style = {styles.review_detail}/>
                                    <Text style = {styles.review_detail}>250498</Text>
                                </View>
                                <View style = {styles.review}>
                                    <Icon name = 'ios-list-outline' style = {styles.review_detail}/>
                                    <Text style = {styles.review_detail}>254/?</Text>
                                </View>
                            </View>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    review_detail: {
        color: 'gray',
        fontSize: 13,
        marginRight: 5,
    },
    review: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});