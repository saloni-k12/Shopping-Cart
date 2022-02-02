import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import {Navigation} from 'react-native-navigation';
import Counter from '../ReduxPages/Counter';


const Login = ({navigation}) => {
    return (
        <View style = {styles.container}>
        <Text style = {styles.need}>Need Help?</Text>
          <Image 
            source = {{uri: 'https://www.iconsdb.com/icons/preview/color/0A8C86/edit-user-xxl.png'}}
            style= {{ padding:60, width:50, height:50}}
          />
           <Text style = {styles.login}>Login</Text>
           <Text style = {styles.lets}>Welcome back!!</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "grey"
               autoCapitalize = "none"/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"/>

            <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('Hook')}>
               <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          
            
            <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('Register')}>
               <Text style={styles.submitButtonText}>Register</Text>
            </TouchableOpacity>
       
            <TextInput style ={styles.forgot}>Skip Now</TextInput>
         </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 23,
        backgroundColor:'#ddf1f0',
        alignContent: 'center',
        flex: 1,
        
     },
     need: {
      fontWeight: 'bold',
      color: '#0a8c86',
      top:0.5,
      left:250
     },
     login: {
      paddingTop: 30,
      fontWeight: 'bold',
      fontSize: 40,
      color: '#0a8c86',
     },
     lets: {
      paddingBottom: 15,
      fontWeight: 'bold',
      color: 'grey',
     },
     input: {
      margin: 15,
      height: 40,
      borderColor: '#0a8c86',
      borderWidth: 1
     },
     forgot:{
        padding: 5,
        alignContent: 'center',
        color: 'grey',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        left: 125      
     },
     submitButton: {
        backgroundColor: '#0a8c86',
        padding: 10,
        margin: 15,
        height: 40,
        fontWeight: 'bold',
        alignItems: 'center'
     },
     submitButtonText:{
        color: 'white',
        fontWeight: 'bold',
     }
  
})
