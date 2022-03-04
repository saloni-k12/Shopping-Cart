import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AloenCoco = () => {
  return (
    <View style={{backgroundColor: '#ddf1f0', flex:1, justifyContent:'center', }}>
      <Text style={{fontSize: 20, fontWeight:'bold'}}>AloenCoco</Text>
      <TouchableOpacity>
          <Text styles={{fontSize:15}}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AloenCoco

const styles = StyleSheet.create({})