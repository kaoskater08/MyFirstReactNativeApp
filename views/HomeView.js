import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class HomeView extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home View',
    };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}
