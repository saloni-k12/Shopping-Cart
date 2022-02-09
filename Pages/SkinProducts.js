import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';

const SkinProducts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <Text style={styles.head}>Products that will take care of your smooth and glowing skin</Text>
          
            <Image 
                            source = {{uri: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F07%2Ffunction-of-beauty-customizable-body-wash-care-5.jpg?q=75&w=800&cbr=1&fit=max'}}
                            style= {{paddingVertical:30,width: 330,height:250}}/>
                <Text style={styles.hair}> Costum Body Wash</Text>
                <Text style={styles.info}> Customizable according to your skin moisture level, and aesthetic preferences (including color + fragrance).</Text>
            <View style={styles.mask}>
            <Text style={styles.hair}> Body Lotion</Text>
            <Text style={styles.info}>Use this intensive deep-conditioning treatment weekly for an extra boost of nourishment.</Text>
            <Image 
                            source = {{uri: 'https://www.functionofbeauty.com/product/custom-body-care/img/carousel-4.jpg'}}
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

export default SkinProducts;

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
