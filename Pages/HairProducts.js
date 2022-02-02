import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const HairProducts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <Text style={styles.head}>Products than can make your hair spotless</Text>
          
            <Image 
                            source = {{uri: 'https://www.functionofbeauty.com/product/shampoo-conditioner/img/carousel-3.webp'}}
                            style= {{paddingVertical:30,width: 330,height:250}}/>
                <Text style={styles.hair}> Costum Shampoo + Conditioners</Text>
                <Text style={styles.info}> Fully customizable shampoo + conditioner to reach your unique hair goals</Text>
            <View style={styles.mask}>
            <Text style={styles.hair}> Hair Mask</Text>
            <Text style={styles.info}>Use this intensive deep-conditioning treatment weekly for an extra boost of nourishment.</Text>
            <Image 
                            source = {{uri: 'https://www.functionofbeauty.com/product/hair-mask/img/carousel-3.webp'}}
                            style= {{paddingVertical:30,width: 330,height:250}}/>
            </View>
            <Text style={styles.hair}>Costum Hair Serum</Text> 
            <Text style={styles.info}>Use this lightweight serum to help enhance shine, while smoothing frizz and flyaways.</Text>
            <Image 
                            source = {{uri: 'https://s3.amazonaws.com/functionofbeauty.com/images/product/hair-serum/carousel-3.webp'}}
                            style= {{paddingVertical:30, paddingBottom:15, width: 330,height:250}}/>

            <View style={styles.mask}>
            <Text style={styles.hair}> Costum Co-Wash</Text>
            <Text style={styles.info}>Use this rich, cleansing conditioner to moisturize + protect coily, curly, and color-treated hair.</Text>
            <Image 
                            source = {{uri: 'https://www.functionofbeauty.com/product/co-wash/img/carousel-3.webp'}}
                            style= {{paddingVertical:30,width: 330,height:250}}/>
            </View>

        </ScrollView>
        </SafeAreaView>  
   
  );
};

export default HairProducts;

const styles = StyleSheet.create({
    container:{
        paddingVertical:15,
        paddingHorizontal:15,
        
    },
    head:{
       
        paddingVertical:15,
        fontSize:35,
        color :'#0a8c86'
    },
   
    hair:{
        
        textAlign:'center',
        fontSize:25,
        color :'#0a8c86',
        paddingVertical:15,
        paddingBottom:15

        
    },
    info:{
        textAlign:'center',
        fontSize:15,
        paddingBottom:30

    },
    mask:{
        paddingTop:20,
        paddingVertical:20,
        backgroundColor:'#ddf1f0'
    }
});
