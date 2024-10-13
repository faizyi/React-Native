import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'

const RNFlatList = () => {
    const data = [
        {id: 1,product: "Apple"},
        {id: 2,product: "Oppo"},
        {id: 3,product: "Vivo"},
    ]
  return (
    <SafeAreaView>
    <View>
      <Text>FlatList</Text>
      {data.map((item, index)=><Text key={index}>{index}. {item.product}</Text>)}
      {/* <FlatList
    //   style={{marginTop:20}}
      data={data}
      renderItem={({item})=><Text>{item.product}</Text>}
      keyExtractor={item=>item.id}
      /> */}
    </View>
    </SafeAreaView>
  )
}

export default RNFlatList