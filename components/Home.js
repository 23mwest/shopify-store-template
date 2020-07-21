import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from "react-native";

import CartButton from './CartButton';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartButton: {
        alignSelf: "flex-end"
    }
})