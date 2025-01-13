import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const RNPressable = () => {
  return (
    <View style={style.container}>
      <Text>RNPressable</Text>
      <Pressable 
    //   onLongPress={()=>console.warn("long")}
    onPressIn={()=>console.warn("in")}
    onPressOut={()=>console.warn("out")}
      >
        <Text>
            Pressable
        </Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
        justifyContent: "center"
    }
})

export default RNPressable