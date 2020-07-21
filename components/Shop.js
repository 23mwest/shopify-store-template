import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from "react-native"
import { store } from '../redux/app-redux.js'

export default class Shop extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Shop!</Text>
                <Button title="Add Item to Cart"
                    onPress={() => addItem()}/>
            </View>
        )
    }
}

const addItem = item => store.dispatch({type: 'ADD_ITEM', item});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
