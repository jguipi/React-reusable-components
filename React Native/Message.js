/**
 * For : React-native
 * Allow to display Text 
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = (props) => {
  return (
    <Text style={styles.text}>
      {props.children} 
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 8,
    marginBottom: 0,
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});

export { Message };

