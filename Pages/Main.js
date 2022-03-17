import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../ReduxSaga/UserAction';


const Main = ({ users }) => {
    
    useEffect(() => {
      fetchUser;
    }, []);
    const dispatch = useDispatch();
    const fetchUser = () => {
      dispatch(getData());
    };
    const users = useSelector((state) => ({...state.users}));
    console.log(`Data: ${users}`)
    

    return (
      <View style={styles.contain}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
        <Image 
          source = {{uri: 'https://www.iconsdb.com/icons/preview/color/0A8C86/user-xxl.png'}}
          style= {styles.userImage}/>
          </TouchableOpacity>
          
          </View> 
        
        <TouchableOpacity style= {styles.submitButton} onPress={()=> this.props.navigation.navigate('Hook')}>
                <Text style={styles.submitButtonText}>Next Page</Text>
      </TouchableOpacity> 
      </View>
    )
   
}

export default Main


const styles = StyleSheet.create({
    contain:{
        padding:15,
        alignContent: 'center',
        flex:1,
        flexDirection:"column",
        backgroundColor:'#ddf1f0'
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
     user:{
         paddingHorizontal:8,
         color:'#0a8c86',
         fontSize:20,
         fontWeight:'600'
     },
     userImage:{
        width: 30,
        height:30,
     }
})