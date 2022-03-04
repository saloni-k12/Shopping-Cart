import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Realm from 'realm';

const LoginSchema ={
   name: 'Login',
   properties: {
      username: 'string',
      password: 'string',
   },
   primaryKey: 'username',
};


const Login = ({navigation}) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [realm, setRealm] = useState(null);
   const [login, setLogin] = useState([]);

   useEffect(() => {
      (async () => {
         const realm = await Realm.open({
            path: 'myrealm',
            schema: [LoginSchema],
         })
         const login = realm.objects('Login');

         setLogin([...login])
         setRealm(realm);

         try{
            login.addListener(() => {
               setLogin([...login]);
            });
         }
         catch{
            console.error(`Error updating login page: ${error}`)
         }
      })();
   }, []);

   const AddLogin = () => {
      realm.write(() => {
         login1 = realm.create('Login', {
            username: username,
            password: password,
         });
      });
      setUsername('');
      setPassword('');
   }

   
   
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
               placeholder = "Username"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText={(username) => setUsername(username)}
               value= {username}
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText={(password) => setPassword(password)}
               value= {password}
               />

            <TouchableOpacity style= {styles.submitButton} onPress={()=>AddLogin()}>
               <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          
            
            <TouchableOpacity style= {styles.submitButton} onPress={()=>navigation.navigate('Location')}>
               <Text style={styles.submitButtonText}>Register</Text>
            </TouchableOpacity>

            <View>
               {
                  login.map((login,ind) => {
                     return(
                        <View key={ind}>
                           <Text> {login.username} </Text>
                           <Text> {login.password} </Text>
                        </View>
                     )
                  })
               }
            </View>
            <Text style ={styles.forgot}>Skip Now</Text>
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
