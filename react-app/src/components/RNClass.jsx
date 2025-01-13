import { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native'

class RNClass extends Component {
    handleClick() {
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }
    render() {
        return (
            <View>
                <Text>{this.state.name}</Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(val) => this.setState({ name: val })}
                    placeholder='Enter'
                />
                <Button title='Click' onPress={this.handleClick} />
            </View>
        )
    }
}
export default RNClass;