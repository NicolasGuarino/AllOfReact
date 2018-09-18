import * as React from 'react';
import { Text, View, StyleSheet, Platform} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

import NavigationBar from 'react-native-navbar';


export default class App extends React.Component {
  render() {
    return(
 
      <View style = { styles.MainContainer }>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
        />

        <Text> Main View </Text>

        <View style={ styles.bottomView} >
          <Text style={styles.textStyle}>Parte de Baixo</Text>
        </View>

      </View>

  );
  }
}


const styles = StyleSheet.create({
      MainContainer:
      {
          flex: 1,
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
          paddingTop: ( Platform.OS === 'android' ) ? 24 : 0
          
      },
   
      bottomView:{
   
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
      topView: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#000000', 
        justifyContent: 'center', 
        alignItems: 'center',
        
      },
      textStyle:{
   
        color: '#fff',
        fontSize:22
      }
});

const rightButtonConfig = {
  title: 'Próximo',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Selo Inteligente',
};