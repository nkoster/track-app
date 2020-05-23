import React from 'react'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { View } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer />
            <Spacer><Text h3>sign up for tracker</Text></Spacer>
            <Spacer />
            <Spacer><Input label='email' /></Spacer>
            <Spacer><Input label='password' /></Spacer>
            <Spacer><Button title='submit' /></Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = _ => {
    return {
        headerShown: false
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
}

export default SignupScreen
