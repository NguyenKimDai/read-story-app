import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { ScrollView } from 'react-native';
import ItemStory from './ItemStory';

export default class Reading extends Component {

    render() {
        return (
            <View style = {{flex: 1}}>
                <ScrollView>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                    <ItemStory/>
                </ScrollView>
            </View>
        );
    }
}