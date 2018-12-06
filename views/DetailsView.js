import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import firebase from '../Firebase';

class DetailsView extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Book List',
    };
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection('books');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      books: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onCollectionUpdate = (querySnapshot) => {
    const books = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      books.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      books,
      isLoading: false,
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={styles.list}>
          {
            this.state.books.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                subtitle={item.author}
                onPress={() => {
                  this.props.navigation.navigate('BookDetails', {
                    bookkey: `${JSON.stringify(item.key)}`,
                  });
                }
              }
              />
            ))
          }
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
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

export default DetailsView;
