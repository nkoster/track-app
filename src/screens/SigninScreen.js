import React, { useContext } from 'react'
import Spacer from '../components/Spacer'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='sign in to tracker'
                errorMessage={state.errorMessage}
                onSubmit={_ => {}}
                submitButtonText='submit'
            />
            <Spacer />
            <NavLink
                title={`Don't have an account? Click here`}
                routeName='SignupScreen'
            />
        </View>
    )
}
 SigninScreen.navigationOptions = _ => {
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

export default SigninScreen
