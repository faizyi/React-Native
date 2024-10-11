import { View, Text,} from 'react-native'
import style from './style'
import SignupForm from '../components/SignupForm'
const Index = () => {
  return (
    <View style={style.container}>
        <Text style={{fontSize: 30}}>Hello React Native</Text>
        <SignupForm/>
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