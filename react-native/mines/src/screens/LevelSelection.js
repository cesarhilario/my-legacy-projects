import React from 'react';
import {  
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} 
            visible={props.isVisible} animationType='slide'
            transparent={true}> 
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                </View>
            </View>
        </Modal>
    )
}