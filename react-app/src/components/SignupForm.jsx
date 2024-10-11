import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const SignupForm = () => {
  return (
    <View>
      <Text style={{textAlign: "center", fontSize: 24, marginBottom: 20}}>SignupForm</Text>
      <View>
        <TextInput
        style={styles.textInput}
        placeholder='Name'
        />
        <TextInput
        style={styles.textInput}
        placeholder='Email'
        />
        <TextInput
        style={styles.textInput} 
        placeholder='Password'
        secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
      {/* <Button style={styles.button} title='Submit'/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  textInput : {
    borderColor : "black",
    borderWidth : 1,
    padding : 5,
    width : 300,
    marginTop : 6
  },
  button : {
    marginTop : 6,
    backgroundColor : "black"
  }
})

export default SignupForm