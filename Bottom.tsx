import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

type P = {
  _onChangePage: (page: string) => void
}

const Bottom:React.FC<P> = ({ _onChangePage }) => {
  return (
    <View style={styles.foot}>
      <Text style={styles.text} onPress={()=>{_onChangePage('front')}}>FrontEnd</Text>
      <Text style={styles.text} onPress={()=>{_onChangePage('back')}}>BackEnd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  foot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    paddingTop: '5%',
    borderWidth: 1,
    borderRadius: 60,
    borderColor: 'yellow',
    backgroundColor: 'yellow',
  }
});

export default Bottom