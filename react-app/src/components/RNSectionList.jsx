import { View, Text, SectionList } from 'react-native'
import React from 'react'

const RNSectionList = () => {
    const data = [
        {
            id: 1,
            name : "Apple",
            data : ["iphone 16", "iphone 15"]
        },
        {
            id: 2,
            name : "Oppo",
            data : ["Oppo A1K", "Oppo Reno"]
        }
    ]
  return (
    <View>
      <Text>SectionList</Text>
      <SectionList
      sections={data}
      renderItem={({item})=><Text>{item}</Text>}
      renderSectionHeader={({section: {name}})=>(
        <Text style={{color: "blue"}}>{name}</Text>
      )}
      />
    </View>
  )
}

export default RNSectionList