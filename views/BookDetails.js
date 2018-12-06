import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import { List, ListItem, Button, Icon, Card } from 'react-native-elements';
import firebase from '../Firebase';

class BookDetails extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Book Details',
    };
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      book: {},
      key: ''
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const ref = firebase.firestore().collection('books').doc(JSON.parse(navigation.getParam('bookkey')));
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          book: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text h3>{this.state.book.title}</Text>
            </View>
            <View>
              <Text h5>{this.state.book.description}</Text>
            </View>
            <View>
              <Text h4>{this.state.book.author}</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    marginTop: 0,
    marginBottom: 0,
  }
})

export default BookDetails;
