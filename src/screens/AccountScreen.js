import React, { useContext } from 'react'
import { SafeAreaView } from 'react-navigation'
import { Feather } from '@expo/vector-icons'; 
import { Context as AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AccountScreen = _ => {
    const { signout } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Spacer>
                <Button
                    buttonStyle={{backgroundColor:'gray'}}
                    title='sign out'
                    onPress={signout}
                    style={{marginTop:150}}
                />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'SIGN OUT',
    tabBarIcon: ({ tintColor }) => <Feather name='users' size={20} color={tintColor} />,
    tabBarOptions: {
        activeTintColor: '#5090ff',
    }
}

export default AccountScreen
