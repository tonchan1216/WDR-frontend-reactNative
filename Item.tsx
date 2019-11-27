import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

const Item: React.FC<{text: string}> = ({text}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#00FF00',
    marginBottom: 15,
    padding: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})

export default Item
