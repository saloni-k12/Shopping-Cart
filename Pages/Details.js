import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';




const Login = ({navigation}) => {
    
    return (
        <View style = {styles.container}>
            <Text style={styles.heading}>Shipping Details</Text>
                <Text style={styles.need}>Name</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Name"
               placeholderTextColor = "grey"
               autoCapitalize = "none"/>
             <Text style={styles.need}>Phone No.</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Phone"
               placeholderTextColor = "grey"
               autoCapitalize = "none"/>
            <Text style={styles.need}>Address</Text>
            <TextInput style = {styles.input1}
               underlineColorAndroid = "transparent"
               textAlign="left"
               placeholder = " Address"
               placeholderTextColor = "grey"
               autoCapitalize = "none"/>


               <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={{paddingHorizontal:10, paddingTop:20}}>
                  <AntDesign name={"checksquare"} style={{fontSize:25,color:'#0a8c86', paddingTop:5}} />
               </TouchableOpacity>
               <Text style={{fontWeight:'600', color:'#0a8c86', fontSize:25, paddingHorizontal:5,paddingTop:20}}>Credit Card</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={{paddingHorizontal:10, paddingTop:20}}>
                  <AntDesign name={"checksquare"} style={{fontSize:25,color:'#0a8c86', paddingTop:5}} />
               </TouchableOpacity>
               <Text style={{fontWeight:'600', color:'#0a8c86', fontSize:25, paddingHorizontal:5,paddingTop:20}}>Debit Card</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={{paddingHorizontal:10, paddingTop:20}}>
                  <AntDesign name={"checksquare"} style={{fontSize:25,color:'#0a8c86', paddingTop:5}} />
               </TouchableOpacity>
               <Text style={{fontWeight:'600', color:'#0a8c86', fontSize:25, paddingHorizontal:5,paddingTop:20}}>UPI Payment</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={{paddingHorizontal:10, paddingTop:20}}>
                  <AntDesign name={"checksquare"} style={{fontSize:25,color:'#0a8c86', paddingTop:5}} />
               </TouchableOpacity>
               <Text style={{fontWeight:'600', color:'#0a8c86', fontSize:25, paddingHorizontal:5,paddingTop:20}}>Net Banking</Text>
               </View>
               
            <View style={{paddingTop:18}}>
             <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('Details')}>
               <Text style={styles.submitButtonText}>Place Your Order</Text>
            </TouchableOpacity> 
            </View>
         </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor:'#ddf1f0',
        alignContent: 'center',
        flex: 1,
        
     },
     heading:{
        paddingBottom:15,
        fontWeight: '600',
        fontSize: 30,
        color :'#0a8c86'
     },
     need: {
         paddingHorizontal:10,
         fontSize:16,
         color:'#0a8c86',
         fontWeight:'600',
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
     input1: {
        margin: 15,
        height: 100,
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
     },
     checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
  
})
