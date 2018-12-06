import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class HomeView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Settings screen</Text>
      </View>
    )
  }
}
