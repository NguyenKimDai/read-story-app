import React, { Component } from 'react';
import { Text, View } from 'native-base';
import ItemStory from './ItemStory';

export default class Reading extends Component {

    render() {
        return (
            <View style = {{flex: 1}}>
                <ItemStory/>
            </View>
        );
    }
}