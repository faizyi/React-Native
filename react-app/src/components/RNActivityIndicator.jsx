import { View, Text, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

const RNActivityIndicator = () => {
    const [show, setShow] = useState(false);
    const handle = ()=>{
        setShow(!show);
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }
  return (
    <View>
      <Text>RNActivityIndicator</Text>
      <ActivityIndicator
      size={50}
      color={"red"}
      animating={show}
      />
      <Button title='Show Loader' onPress={handle}/>
    </View>
  )
}

export default RNActivityIndicator