import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,clear} from '../ReduxPages/ActionCounter'

const Counter = ({navigation}) => {
    const data = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <View style={styles.contain}>
            <View style={styles.container}>
                <Image 
                    source = {{uri: 'https://i.insider.com/5e28781062fa81138849a27a'}}
                    style= {styles.item} />
                
                
                <View style={styles.hook}>
                    <Text style={styles.info}> AloeVera & Coconut</Text>
                    <Text style={styles.details}>Aloe Vera & Coconut Volume Hair Shampoo + Conditioner Combo</Text>
                    <View style={styles.direction}>
                        <TouchableOpacity onPress={() =>dispatch(increment())}>
                            <Text style= {styles.button}> + </Text>
                        </TouchableOpacity>
                            <Text style= {styles.answer}>{data}</Text>
                        <TouchableOpacity onPress={() =>dispatch(decrement())}>
                            <Text style= {styles.button}> - </Text>
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
                    <View style={styles.direction}>
                        <TouchableOpacity onPress={() =>dispatch(increment())}>
                            <Text style= {styles.button}> + </Text>
                        </TouchableOpacity>
                            <Text style= {styles.answer}>{data}</Text>
                        <TouchableOpacity onPress={() =>dispatch(decrement())}>
                            <Text style= {styles.button}> - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style= {styles.submitButton} onPress={()=> navigation.navigate('Hook')}>
                  <Text style={styles.submitButtonText}>Next</Text>
                  </TouchableOpacity> 
        </View>
    )
}

export default Counter

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
        fontWeight:'bold'
    },
    details:{
        paddingBottom:15,
        textAlign:'left',
        fontSize:15
    },
    hook:{
       
        fontSize: 50,
        flexDirection: "column",
        fontWeight: 'bold'

    },
    direction:{
        paddingTop: 50,
        flexDirection:"row"
      
    },
    button:{
        fontSize: 20,
        fontWeight: 'bold',

    },
    answer: {
        fontSize:30,
        fontWeight: 'bold',
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
