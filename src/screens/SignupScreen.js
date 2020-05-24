import React, { useState, useContext } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { View, TouchableOpacity } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='sign up for tracker'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='submit'
            />
            <Spacer />
            <TouchableOpacity onPress={_ => navigation.navigate('SigninScreen')} >
                <Spacer>
                    <Text style={styles.link}>
                        Already have an account? Click here
                    </Text>
                </Spacer>
            </TouchableOpacity>
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
    link: {
        color: 'gray',
        textAlign: 'center'
    },
}

export default SignupScreen
