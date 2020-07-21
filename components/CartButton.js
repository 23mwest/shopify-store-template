import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'; 
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { store } from '../redux/app-redux.js'
import { connect } from 'react-redux';


class CartButton extends Component {

    render(){
        const {items, navigation} = this.props;

        return (  
            <View style={styles.container}>
                <TouchableOpacity
                    hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
                    onPress={ () => navigation.navigate('Cart')} >
                    <Feather name="shopping-cart" size={24} />
                    
                </TouchableOpacity>
                {items > 0 && ( 
                <View style={{
                        position: 'absolute',
                        right: 10,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 7,
                        width: 14,
                        height: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    <Text style={{ 
                        position: 'absolute', 
                        color: 'white', 
                        fontSize: 10, 
                        fontWeight: 'bold' }}>
                            {items.toString()}
                    </Text>
                </View>)}
            </View>
        );
    }
    
}

// const navigateToCart = function(){
//     const navigation = useNavigation();
//     navigation.navigate('Cart');
// }

const mapStateToProps = function(state){
    //debugger;
    console.log(state.length);
    const items = state.cartItems;
    return { items : items }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 20
    }
})

export default connect(mapStateToProps)(CartButton)



