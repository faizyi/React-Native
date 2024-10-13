import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : ""
  });
  const [display, setDisplay] = useState(false)
  const handleChange = (key, value)=>{
    setFormData((prev)=>({
      ...prev,
      [key] : value
    }))
  }
  const handleSubmit = () => {
    setDisplay(true)
  }
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 24, marginBottom: 20 }}>SignupForm</Text>
      <View>
        <TextInput
          value={formData.name}
          style={styles.textInput}
          placeholder='Name'
          onChangeText={(val)=>handleChange("name", val)}
        />
        <TextInput
          value={formData.email}
          style={styles.textInput}
          placeholder='Email'
          onChangeText={(val)=>handleChange("email", val)}
        />
        <TextInput
          value={formData.password}
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(val)=>handleChange("password", val)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
      {/* <Button style={styles.button} title='Submit'/> */}

      <View>
        {display ? (
          <Text>
            {formData.name}
            {formData.email}
            {formData.password}
          </Text>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    width: 300,
    marginTop: 6
  },
  button: {
    alignItems: "center",
    padding: 5,
    marginTop: 6,
    backgroundColor: "black"
  }
})

export default SignupForm