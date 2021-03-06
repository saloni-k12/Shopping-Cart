import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {store} from '../ReduxPages/store';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import HairProducts from '../Pages/HairProducts';
import SkinProducts from '../Pages/SkinProducts';
import Hook from '../Pages/Hook';
import Counter from '../ReduxPages/Counter';
import Cart from '../Pages/Cart';
import Details from '../Pages/Details';
import AloenCoco from '../Pages/AloenCoco';
import Main from '../Pages/Main';
import Location from '../Pages/Location'



const Stack = createNativeStackNavigator();


const PageNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="HairProducts" component={HairProducts} options={{headerShown:false}} />
        <Stack.Screen name="SkinProducts" component={SkinProducts} options={{headerShown:false}} />
        <Stack.Screen name="Counter" component={Counter} options={{headerShown:false}}/>
        <Stack.Screen name="Hook" component={Hook} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
        <Stack.Screen name="AloenCoco" component={AloenCoco} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}} />
        <Stack.Screen name="Location" component={Location} options={{headerShown:false}} />
        
      </Stack.Navigator>
      
    )
}

export default PageNav

