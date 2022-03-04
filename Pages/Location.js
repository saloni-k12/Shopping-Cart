import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Realm from 'realm';

const LocationSchema = {
   name: 'Location',
   properties: {
      address: 'string',
      city: 'string',
      state: 'string',
      country: 'string',
   },
   primaryKey: 'address',
};


const Location = ({navigation}) => {
   const [address, setAddress] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [country, setCountry] = useState('');
   const [realm, setRealm] = useState('');
   const [location, setLocation] = useState([]);

   useEffect(() => {
      (async () => {
         const realm = await Realm.open({
            path: 'realmlocal',
            schema: [LocationSchema],
         })
         const location = realm.objects('Location');

         setLocation([...location])
         setRealm(realm);

         try{
            location.addListener(() => {
               setLocation([...location]);
            });
         }
         catch{
            console.error(`Error updating page: ${error}`)
         }
      })();
   }, []);

   const AddLocal = () => {
      realm.write(() => {
         location1 = realm.create('Location', {
            address: address,
            city: city,
            state: state,
            country: country,
         });
      });
      setAddress('');
      setCity('');
      setState('');
      setCountry('');
   }

   
   
    return (
        <View style = {styles.container}>
        
         
           <Text style = {styles.login}>Enter Your Local Address</Text>
           
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText={(address) => setAddress(address)}
               value= {address}
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "City"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText={(city) => setCity(city)}
               value= {city}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "state"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText={(state) => setState(state)}
               value= {state}
               />

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Country"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText={(country) => setCountry(country)}
               value= {country}
               />

            <TouchableOpacity style= {styles.submitButton} onPress={()=>AddLocal()}>
               <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          
            <Text style= {{fontSize:18}}>Your Order will be deliverd on this address -</Text>
            
            <View style={{padding:15}}>
               {
                  location.map((location,loc) => {
                     return(
                        <View key={loc}>
                           <Text style={{fontSize:14}}> {location.address} </Text>
                           <Text style={{fontSize:14}}> {location.city} </Text>
                           <Text style={{fontSize:14}}> {location.state} </Text>
                           <Text style={{fontSize:14}}> {location.country} </Text>
                        </View>
                     )
                  })
               }
            </View>

            <TouchableOpacity style= {styles.submitButton} onPress={()=>navigation.navigate('Register')}>
               <Text style={styles.submitButtonText}>Payment</Text>
            </TouchableOpacity>

            
         </View>

    )
  
  }
export default Location


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
      paddingTop: 5,
      fontWeight: 'bold',
      fontSize: 30,
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
