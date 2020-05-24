import React, { useContext } from 'react'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

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
            <NavLink
                title='Already have an account? Click here'
                routeName='SigninScreen'
            />
        </View>
    )
}

SignupScreen.navigationOptions = _ => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    link: {
        color: 'gray',
        textAlign: 'center'
    },
})

export default SignupScreen
