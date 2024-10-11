import { View, Text, Button } from 'react-native'
import React from 'react'

const RNButton = () => {
    var data = 0
    const warn = (val)=>{
        data = 50;
        console.warn(data)
    }
  return (
    <View>
      <Text>{data}</Text>
      <Button title='Button' onPress={()=>warn("hello react")} color={"black"}></Button>
      <Button title='Button' onPress={()=>warn("hello faiz")} color={"red"}></Button>
    </View>
  )
}

export default RNButton