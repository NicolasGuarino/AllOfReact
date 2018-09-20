import * as React from 'react';
import {
    AppRegistry,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    Image,
    TextInput,
    StyleSheet, // CSS-like styles
    Text, // Renders text
    View, // Container component
    TouchableHighlight
} from "react-native";
import { ImagePicker } from 'expo';
import ModalDropdown from 'react-native-modal-dropdown';

const DEMO_OPTIONS_2 = [
    {"name": "Rex"},
    {"name": "Mary"},
    {"name": "John"},
    {"name": "Jim"},
    {"name": "Susan"},
    {"name": "Brent"},
    {"name": "Alex"},
    {"name": "Ian"},
    {"name": "Phil"},
  ];



export default class CadastroForm extends React.Component {
    
    static navigationOptions = {
      headerStyle: {
          backgroundColor: "#16a085",
          elevation: null
      },
      header: null
    };
    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.onChangeText('pictureUrl', result.uri);
      }
    };
    render() {
        return (

            <View style={styles.container}>
            <View behavior="padding" style={styles.container}>
              <View style={styles.logoContainer}>
              
                <Image style={styles.logo} source={require('../../assets/selecione.png') } onPress={this.pickImage} />

                <ModalDropdown ref="dropdown_2"
                    style={styles.dropdown_2}
                    textStyle={styles.dropdown_2_text}
                    dropdownStyle={styles.dropdown_2_dropdown}
                    options={DEMO_OPTIONS_2}
                    renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                    renderRow={this._dropdown_2_renderRow.bind(this)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                />
              </View>
            </View>
            
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate("Cadastrar")}
                title="Cadastrar"
              >
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>

        );
    }
    _dropdown_2_renderButtonText(rowData) {
        const {name} = rowData;
        
        return `${name}`;
      }
    
      _dropdown_2_renderRow(rowData, rowID, highlighted) {
        let icon = highlighted ? require('../../assets/heart.png') : require('../../assets/flower.png');
        let evenRow = rowID % 2;
        return (
          <TouchableHighlight underlayColor='cornflowerblue'>
            <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? 'lemonchiffon' : 'white'}]}>
              <Image style={styles.dropdown_2_image}
                     mode='stretch'
                     source={icon}
              />
              <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
                {`${rowData.name}`}
              </Text>
            </View>
          </TouchableHighlight>
        );
      }
    
      _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        if (rowID == DEMO_OPTIONS_2.length - 1) return;
        let key = `spr_${rowID}`;
        return (<View style={styles.dropdown_2_separator}
                      key={key}
        />);
      }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: "center",
        marginTop: 100
    },
    logo: {
        borderColor: '#000',
        borderWidth: 1,
        width: 200,
        height: 150,
        borderRadius: 20
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "700"
    },
    button: {
        backgroundColor: "#27ae60",
        paddingVertical: 15
    },
    window: {
        marginBottom: 15
    },
    dropdown_2: {
        alignSelf: 'center',
        width: 250,
        marginTop: 32,
        marginLeft: 25,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'cornflowerblue',
      },
      dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
      dropdown_2_dropdown: {
        width: 250,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
      },
      dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
      },
      dropdown_2_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
      },
      dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
      },
      dropdown_2_separator: {
        height: 1,
        backgroundColor: 'cornflowerblue',
      },
  });

