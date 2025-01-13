import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const RNLifeCycle = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    useEffect(()=>{
        console.warn(count)
        return ()=>{
            setCount(0)
        }
    },[count,])
  return (
    <View>
      <Text>RNLifeCycle</Text>
      <Text>{count}</Text> 
      <Button  title='Click' onPress={()=>setCount(count + 1)}/>
      <Button title='Toggle' onPress={()=>setShow(!show)}/>
      {show ?  <Unmount/> : null}
    </View>
  )
}


const Unmount = () => {
    let timer = setInterval(()=>{
        console.warn("timer")
    }, 2000)
    useEffect(()=>{
        return ()=> clearInterval(timer)
    })
  return (
    <View>
      <Text>Unmount</Text>
    </View>
  )
}

export default RNLifeCycle