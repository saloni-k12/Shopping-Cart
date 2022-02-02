import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Hook = () => {
    const [number, setNumber]=useState(0)
    useEffect(()=>{
        if(number>10){
            console.warn("Your cart is full")
        }

        
    })

    return (
        <View style={styles.contain}>
            <View style={styles.container}>
                <Image 
                    source = {{uri: 'https://i.insider.com/5e28781062fa81138849a27a'}}
                    style= {styles.item}/>
                
                
                <View style={styles.hook}>
                    <Text style={styles.info}> AloeVera & Coconut</Text>
                    
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Shampoo (250ml) + </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Conditioner (250ml) </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Combo </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, fontWeight:'bold'}}>170/- </Text>
                    <View style={styles.direction}>
                        <TouchableOpacity onPress={() =>setNumber(number+1)}>
                            <Text style= {styles.button}> +   </Text>
                        </TouchableOpacity>
                            <Text style= {styles.answer}>{number}</Text>
                        <TouchableOpacity onPress={() =>setNumber(number-1)}>
                            <Text style= {styles.button}>   - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Image 
                    source = {{uri: 'https://res.cloudinary.com/jerrick/image/upload/v1572018261/5db318556c8529001dc0a310.png'}}
                    style= {styles.item}/>
                
            
                <View style={styles.hook}>
                    <Text style={styles.info}> Rose Silk</Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Shampoo (250ml) + </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Conditioner (250ml) </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Combo </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, fontWeight:'bold'}}>200/- </Text>
                    <View style={styles.direction}>
                        <TouchableOpacity >
                            <Text style= {styles.button}> +   </Text>
                        </TouchableOpacity>
                            <Text style= {styles.answer}>0</Text>
                        <TouchableOpacity>
                            <Text style= {styles.button}>   - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Image 
                    source = {{uri: 'https://media1.popsugar-assets.com/files/thumbor/7vmusMQqRyCQkvgLkfBSsIBZWow/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/947/n/1922153/5bc0485f5188a03e_netimgXTJdEe/i/Function-Beauty.jpg'}}
                    style= {styles.item}/>
                
            
                <View style={styles.hook}>
                    <Text style={styles.info}> Mix fruits</Text>
                    <Text style={styles.info}> Rose Silk</Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Shampoo (250ml) + </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Conditioner (250ml) </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, }}>Combo </Text>
                    <Text style={{paddingHorizontal:5, fontSize:15, fontWeight:'bold'}}>250/- </Text>
                    <View style={styles.direction}>
                        <TouchableOpacity >
                            <Text style= {styles.button}> +   </Text>
                        </TouchableOpacity>
                            <Text style= {styles.answer}>0</Text>
                        <TouchableOpacity >
                            <Text style= {styles.button}>   - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('Hook')}>
               <Text style={styles.submitButtonText}>Add to Cart</Text>
            </TouchableOpacity> 
         </View>
    )
}

export default Hook

const styles = StyleSheet.create({
    contain:{
        paddingVertical:30,
        paddingHorizontal:15,
        alignContent: 'center',
        flex:1,
        flexDirection:"column",
        backgroundColor:'#ddf1f0'
    },
    container:{
        alignContent: 'center',
        flex:1,
        flexDirection:"row",
    },
    item:{
        width: 150,
        height:150,
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
        alignItems: 'center'
     },
     submitButtonText:{
        color: 'white',
        fontWeight: 'bold',
     }
})
