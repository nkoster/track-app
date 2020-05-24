import React, { useState, useContext } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    return (
        <View style={styles.container}>
            <Spacer />
            <Spacer><Text h3>sign up for tracker</Text></Spacer>
            <Spacer />
            <Spacer>
                <Input
                    label='email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input
                    label='password'
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry // same as secureTextEntry={true}
                />
            </Spacer>
            { state.errorMessage
                ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                : null
            }
            <Spacer>
                <Button
                    title='submit'
                    onPress={() => signup({ email, password })}
                />
            </Spacer>
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
    },
    errorMessage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        marginLeft: 8
    }
}

export default SignupScreen
