import React from 'react'
import { Text, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{fontSize:48}}>SignupScreen</Text>
            <Button
                title={'signin'}
                onPress={_ => navigation.navigate('SigninScreen')}
            />
            <Button
                title={'main flow'}
                onPress={_ => navigation.navigate('mainFlow')}
            />
        </>
    )
}

export default SignupScreen
