import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { store } from '../redux/app-redux.js'

class Cart extends Component {
    render() {
        const {items} = this.props;
        return (
        <View style={styles.container}>
            <Text>Cart has {items.toString()} items!</Text>
        </View>
        )
    }
}

function mapStateToProps(state){
    //debugger;
    console.log(state.length);
    const items = state.cartItems
    return { items: items }
}

export default connect(mapStateToProps)(Cart)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
