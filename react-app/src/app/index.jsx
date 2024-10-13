import { View, Text,ScrollView} from 'react-native'
import style from './style'
import RNSectionList from '../components/RNSectionList'
const Index = () => {
  return (
    <View style={style.container}>
      <ScrollView>
        <Text style={{fontSize: 30,}}>Hello React Native</Text>
        <RNSectionList/>
        </ScrollView>
    </View>
  )
}

// internal css
// const styles = StyleSheet.create({
//     container : {
//         display : "flex",
//         justifyContent : "center",
//         alignItems : "center",
//     }
// })


export default Index