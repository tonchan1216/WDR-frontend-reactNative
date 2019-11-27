import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

type P = {
  inputText: string,
  _onPushButton: () => void,
  _onChangeText: (inputText: string) => void
}

const Form: React.FC<P> = ({ inputText, _onPushButton, _onChangeText }) => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={(text: string) => (_onChangeText(text))}
        autoFocus={true}
        placeholder={'input subject'}
        />
      <View style={styles.button}>
        <Button onPress={() => (_onPushButton())} title={'ADD'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center'
  },
  input: {
    flex: 3,
    alignItems: 'center'
  },
  button: {
    flex: 1,
  }
})

export default Form