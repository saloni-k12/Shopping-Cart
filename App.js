import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import PageNav from './Navigation/PageNav'
import {store} from './ReduxPages/store'
import {Provider} from 'react-redux'


const App = () => {
    return (
        <Provider store={store}>
        <View style={styles.container}>
            <NavigationContainer>
                <PageNav /> 
            </NavigationContainer>
        </View>
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex:1
    },

})
