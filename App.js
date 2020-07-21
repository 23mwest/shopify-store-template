import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { Provider } from 'react-redux';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import Blog from './components/Blog.js';
import Cart from './components/Cart.js';
import CartButton from './components/CartButton';
import { store } from './redux/app-redux.js'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// export function cartUpdated = items => {
//   this.setItems(items);
// }

const HomeScreen = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
            return <FontAwesome name="home" size={24} color={color} />; 
            } else if (route.name === "Shop") {
            return <FontAwesome name="shopping-bag" size={18} color={color} />;
            } else {
            return <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: color, fontSize: 18}}>R</Text>
            }
        },
        })}
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        }}>
        <Tab.Screen 
          name="Home" 
          component={Home} />
        <Tab.Screen 
          name="Shop" 
          component={Shop} />
        <Tab.Screen 
          name="Blog" 
          component={Blog} />
    </Tab.Navigator>
  );
}

export default function App() {

  const [cartItems, setItems] = useState(0);

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}  
            options={ ({navigation}) => (
              { title: 'Rouse Brands',
                animationEnabled: false,
                headerLeft: null,
                headerRight: () => (<CartButton navigation={navigation} />)
              }
            )}
          />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
