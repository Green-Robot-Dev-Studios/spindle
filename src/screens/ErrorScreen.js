import React from 'react'
import { Text } from 'react-native-paper';

function ErrorScreen(props) {
    return(
        <>
            <Text>Error {String(props.error)}</Text>
        </>
    )
}

export default ErrorScreen;