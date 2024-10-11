import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const RNTextInput = () => {
    const [name, setName] = useState("");
    function handle(e){
        setName(e)
    }
  return (
    <View>
      <Text>{name}</Text>
      <TextInput 
      style={{borderColor: "black", padding: 10,borderWidth: 2, width: 300}}
      placeholder='Enter Your Name'
      onChangeText={handle}
      />
    </View>
  )
}

export default RNTextInput