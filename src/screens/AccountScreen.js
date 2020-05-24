import React, { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Button, Text } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AccountScreen = _ => {
    const { signout } = useContext(AuthContext)
    return (
        <>
            <Text style={{fontSize:48}}>AccountScreen</Text>
            <Spacer>
                <Button
                    title='sign out'
                    onPress={signout}
                />
            </Spacer>
        </>
    )
}

export default AccountScreen
