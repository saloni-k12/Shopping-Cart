import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableOpacityComponent } from 'react-native';



const Home = ({navigation}) => {
    return (
        
        <View style={styles.container}>
              
              <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.basic}>Login</Text>
          </TouchableOpacity>
          
              <Text style= {styles.home}>Let there be flawless hair</Text>
              <Text style={styles.discription}>The customizable beauty – hair, skin, and body care products made for you. Chemical and Toxin Free Natural and Safe Skincare as well as Hair care Products Online.</Text>
                
              <Image 
                    source = {{uri: 'https://s3.r29static.com/bin/entry/535/0,200,2000,2000/x,80/1936300/image.jpg'}}
                    style= {{paddingVertical:30,width: 330,height:250}}/>

              <Text style={styles.our}>Our Products...</Text>
              <View style={styles.about}>
               
                <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('HairProducts')}>
                  <Text style={styles.submitButtonText}>Hair Products</Text>
                  </TouchableOpacity>
          
                <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('SkinProducts')}>
                  <Text style={styles.submitButtonText}>Skin Products</Text>
                  </TouchableOpacity>
              </View>

          
          
                  
            </View>
       
      )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    paddingHorizontal:15,
    backgroundColor: '#ddf1f0',
    alignContent: 'center',
    flex:1

},

basic:{
  color:"#0a8c86",
  fontWeight:'bold',
  fontSize:20,
  textDecorationLine: 'underline',
  left:270
},
discription:{
  fontSize:18,
},
home:{
  color:'#0a8c86',
  fontSize: 50,
  fontWeight:'bold',
  fontFamily: 'abrilFatface'

},
about:{

  alignContent: 'center',
  flexDirection:"row"
},

our:{
  color:'#0a8c86',
  paddingVertical:15,
  fontSize:28
},

submitButton: {
  backgroundColor: '#0a8c86',
  padding: 10,
  margin:15,
  height:40,
  fontWeight: 'bold',
  alignItems: 'center'
},
submitButtonText:{
  color: 'white',
  fontWeight: 'bold',
},

})

