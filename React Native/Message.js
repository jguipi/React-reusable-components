/**
 * For : React-native
 * Allow to display Text 
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Message extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <Text style={styles.error}>
        {this.props.message}
      </Text>
    );
  }
};

const styles = StyleSheet.create({
  error: {
    margin: 8,
    marginBottom: 0,
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});

export { Message };
