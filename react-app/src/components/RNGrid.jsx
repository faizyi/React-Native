import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const RNGrid = () => {
  return (
    <View>
      <View style={{flexGrow: 1, flexDirection: "row", flexWrap: "wrap"}}>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      <Text style={styles.text}>Grid</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        backgroundColor: "black",
        color: "white",
        width: 90,
        height: 90,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 5,
        borderRadius: 10
    }
})

export default RNGrid