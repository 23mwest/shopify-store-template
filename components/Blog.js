import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from "react-native"

export default class Shop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Blog!</Text>
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})