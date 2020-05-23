import React from 'react'
import { View, StyleSheet } from 'react-native'

const Spacer = ({ children }) => {
    return (
    <View style={styles.spacer}>{children}</View>
    )
}

const styles = {
    spacer: {
        margin: 8
    }
}

export default Spacer
