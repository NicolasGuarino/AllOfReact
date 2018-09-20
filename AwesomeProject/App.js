import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';
import CadastroForm from './app/components/CadastroForm'



export default class App extends React.Component {
    render() {
        return (

            <View style = {styles.container} >
            	<CadastroForm />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        paddingTop: (Platform.OS === 'android') ? 24 : 0,
        justifyContent: 'center',
    }
});