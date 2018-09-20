import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {StyleSheet} from 'react-native'
 
export default class SelectPicker extends Component {
  render() {
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
 
    return (
      <Dropdown
        style={styles.selectDropDown}
        label='Favorite Fruit'
        data={data}
      />
    );
  }
}

const styles = StyleSheet.create({
    selectDropDown: {
        width: 100,
        height:30
    }
});