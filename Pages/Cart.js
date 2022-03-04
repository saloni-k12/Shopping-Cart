import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Hook = ({navigation}) => {
    

    return (
        <View style={styles.contain}>
            <Text style={styles.heading}>Basket</Text>
            <View style={{paddingVertical:10,paddingHorizontal:20, flexDirection:'row',alignItems:'center',backgroundColor:"#d9d7d7", marginBottom:15}}>
                <View>
                <Image 
                    source = {{uri: 'https://i.insider.com/5e28781062fa81138849a27a'}}
                    style= {{width:100,height:100}}/>
                    </View>
                
                <View style={{paddingLeft:15}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#0a8c86'}}> AloeVera & Coconut</Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, fontWeight:'bold'}}>170/- </Text>  
                </View>
            </View>

            <View style={{paddingVertical:10,paddingHorizontal:20, flexDirection:'row',alignItems:'center',backgroundColor:"#d9d7d7", marginBottom:15}}>
                <View>
                <Image 
                    source = {{uri: 'https://res.cloudinary.com/jerrick/image/upload/v1572018261/5db318556c8529001dc0a310.png'}}
                    style= {{width:100,height:100}}/>
                    </View>
                
                <View style={{paddingLeft:15}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#0a8c86'}}> Rose Silk</Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, fontWeight:'bold'}}>250/- </Text>
                    
                </View>
            </View>
            <View style={{paddingVertical:10,paddingHorizontal:20, flexDirection:'row',alignItems:'center',backgroundColor:"#d9d7d7", marginBottom:15}}>
            <Text style={{fontWeight: '600', fontSize: 25,color :'#0a8c86'}}>SubTotal:   </Text>
            <Text style={{fontWeight: '600', fontSize: 25}}>420/-   </Text> 
            </View>

            

           

            <View style={{paddingTop:230}}>
             <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('Details')}>
               <Text style={styles.submitButtonText}>Payment</Text>
            </TouchableOpacity> 
            </View>
         </View>
    )
}

export default Hook

const styles = StyleSheet.create({
     contain:{
        paddingHorizontal:20,
         flex:1,
         backgroundColor:'#ddf1f0'
     },
     heading:{
         paddingTop:10,
         paddingBottom:15,
         fontWeight: '600',
         fontSize: 30,
         color :'#0a8c86'
     },
     container:{
         flex:1,
         alignContent: 'center',
         flexDirection:"row",
         backgroundColor:"#cfcdcc",
         borderBottomLeftRadius:50,
         borderTopRightRadius:30,
         height:5
     },
     item:{
         width: 100,
         height:100,
         justifyContent: 'center'
     },
     info:{
         color: '#0a8c86',
         fontSize: 20,
         fontWeight:'bold',
        


     },
     hook:{
       
         fontSize: 50,
         flexDirection: "column",
         fontWeight: 'bold'

    },
     direction:{
      
         flexDirection:"row"
      
     },
     button:{
         fontSize:20,
         fontWeight:'bold',
         color: '#0a8c86'
     },
     answer:{
         fontSize:20,
         fontWeight:'bold',
         color: '#0a8c86'
     },
     submitButton: {
        backgroundColor: '#0a8c86',
         padding: 10,
         margin: 15,
         height: 40,
         fontWeight: 'bold',
        
      },
      submitButtonText:{
          textAlign: 'center',
         color: 'white',
         fontWeight: 'bold',
      }
})
