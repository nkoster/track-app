import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from './Spacer'

const NavLink = ({ title, nav }) => {
    return (
        <TouchableOpacity onPress={nav} >
        <Spacer>
            <Text style={styles.link}>
                {title}
            </Text>
        </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'gray',
        textAlign: 'center'
    }
})

export default NavLink
